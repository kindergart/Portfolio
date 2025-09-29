// DOM操作示例和交互功能

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM已加载完成');
    
    // 初始化所有功能
    initializeNavigation();
    initializeScrollEffects();
    initializeFormHandling();
    initializeAnimations();
    initializeLanguageSwitcher();
    initializeInteractiveEffects();
    initializeParticleSystem();
    initializeProfileInteractions();
    initializeTimelineInteractions();
    initializeAchievementInteractions();
});

// 导航功能
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 移动端菜单切换
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // 添加动画效果
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = hamburger.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : '';
            spans[1].style.opacity = hamburger.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = hamburger.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : '';
        });
    }
    
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // 关闭移动端菜单
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// 平滑滚动到指定部分
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// 滚动效果
function initializeScrollEffects() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        let current = '';
        
        // 确定当前可见的部分
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.pageYOffset + 100;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // 更新导航链接的活动状态
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        // 添加滚动动画效果
        handleScrollAnimations();
    });
}

// 滚动动画
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 表单处理
function initializeFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
        
        // 添加输入验证
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
}

// 表单提交处理
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // 验证表单
    if (!validateForm(form)) {
        return;
    }
    
    // 显示加载状态
    const submitButton = form.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = '发送中...';
    submitButton.disabled = true;
    
    // 模拟发送过程
    setTimeout(() => {
        // 成功消息
        showNotification('消息发送成功！感谢您的联系，我会尽快回复您。', 'success');
        
        // 重置表单
        form.reset();
        
        // 恢复按钮状态
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        console.log('表单数据:', data);
    }, 2000);
}

// 表单验证
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// 字段验证
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // 清除之前的错误状态
    field.classList.remove('error', 'success');
    
    // 基本验证
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, '此字段为必填项');
        isValid = false;
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, '请输入有效的邮箱地址');
            isValid = false;
        } else {
            field.classList.add('success');
        }
    } else if (field.tagName === 'TEXTAREA' && value.length < 10) {
        showFieldError(field, '留言内容至少需要10个字符');
        isValid = false;
    } else if (value) {
        field.classList.add('success');
    }
    
    return isValid;
}

// 显示字段错误
function showFieldError(field, message) {
    field.classList.add('error');
    
    // 创建或更新错误提示
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.9rem';
        errorElement.style.marginTop = '5px';
        errorElement.style.display = 'block';
        field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 设置样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// 初始化动画
function initializeAnimations() {
    // 为元素添加初始动画状态
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-content');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 立即显示第一屏内容
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
}

// 初始化语言切换器
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            
            // 移除所有按钮的活动状态
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加当前按钮的活动状态
            this.classList.add('active');
            
            // 切换语言
            if (typeof switchLanguage === 'function') {
                switchLanguage(lang);
            }
            
            // 添加波纹效果
            createRipple(this, event);
        });
    });
}

// 交互效果初始化
function initializeInteractiveEffects() {
    // 鼠标跟随效果
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
    }
    
    // 添加波纹效果到所有按钮
    const buttons = document.querySelectorAll('.cta-button, .project-link, .social-btn, .submit-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(this, e);
        });
    });
    
    // 添加悬停效果到项目卡片
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow-medium)';
        });
    });
    
    // 添加霓虹灯效果到标题
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setInterval(() => {
            heroTitle.classList.toggle('neon-text');
        }, 3000);
    }
    
    // 添加滚动动画
    const animatedElements = document.querySelectorAll('.skill-category, .achievement-item, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate', 'show');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// 创建波纹效果
function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 粒子系统初始化
function initializeParticleSystem() {
    const particlesContainer = document.querySelector('.particles-container');
    
    if (particlesContainer) {
        // 创建更多粒子
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // 随机属性
            const size = Math.random() * 6 + 2;
            const left = Math.random() * 100;
            const delay = Math.random() * 20;
            const duration = Math.random() * 30 + 20;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = left + '%';
            particle.style.animationDelay = delay + 's';
            particle.style.animationDuration = duration + 's';
            particle.style.background = `rgba(102, 126, 234, ${Math.random() * 0.3 + 0.1})`;
            
            particlesContainer.appendChild(particle);
        }
    }
}

// 项目链接点击事件
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-link')) {
        e.preventDefault();
        const link = e.target;
        const projectTitle = link.closest('.project-info').querySelector('h3').textContent;
        
        if (link.textContent.includes('演示')) {
            showNotification(`正在打开 ${projectTitle} 的演示页面...`, 'info');
            // 这里可以添加实际的演示链接逻辑
        } else if (link.textContent.includes('源代码')) {
            showNotification(`正在打开 ${projectTitle} 的源代码...`, 'info');
            // 这里可以添加实际的源代码链接逻辑
        }
    }
});

// 技能列表交互
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-list li');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.addEventListener('click', function() {
            this.style.background = this.style.background === 'rgb(52, 152, 219)' ? '#f8f9fa' : '#3498db';
            this.style.color = this.style.color === 'white' ? '#333' : 'white';
        });
    });
});

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 页面加载完成后的欢迎消息
window.addEventListener('load', function() {
    setTimeout(() => {
        showNotification('欢迎来到我的作品集网站！', 'info');
    }, 1000);
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    showNotification('页面出现错误，请刷新页面重试。', 'error');
});

// 导出函数供全局使用
window.scrollToSection = scrollToSection;
window.handleSubmit = handleSubmit;

// 头像交互功能
function initializeProfileInteractions() {
    const profileImg = document.getElementById('profileImg');
    const profileTooltip = document.getElementById('profileTooltip');
    
    if (!profileImg || !profileTooltip) return;
    
    // 鼠标悬停显示提示
    profileImg.addEventListener('mouseenter', function() {
        profileTooltip.classList.add('show');
        profileTooltip.textContent = '点击我查看更多！';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        profileTooltip.classList.remove('show');
    });
    
    // 点击头像效果
    let clickCount = 0;
    profileImg.addEventListener('click', function() {
        clickCount++;
        
        // 添加光环效果
        this.classList.add('glow-effect');
        setTimeout(() => {
            this.classList.remove('glow-effect');
        }, 2000);
        
        // 根据点击次数显示不同信息
        const messages = [
            '你好！我是专注于Python开发的工程师 👋',
            '我热爱开源技术和分布式系统 💻',
            '还喜欢动漫和Rust编程 🦀',
            '期待与你交流技术心得！🚀'
        ];
        
        profileTooltip.textContent = messages[clickCount % messages.length];
        profileTooltip.classList.add('show');
        
        // 创建粒子效果
        createProfileParticles(this);
        
        // 显示通知
        showNotification(messages[clickCount % messages.length], 'success');
    });
}

// 创建头像粒子效果
function createProfileParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = `hsl(${Math.random() * 60 + 220}, 70%, 60%)`;
        particle.style.borderRadius = '50%';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(particle);
        
        // 动画
        setTimeout(() => {
            const angle = (i / 12) * Math.PI * 2;
            const distance = 100 + Math.random() * 50;
            particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            particle.style.opacity = '0';
            particle.style.transform += ' scale(0)';
        }, 10);
        
        // 清理
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// 时间线交互功能
function initializeTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const content = item.querySelector('.timeline-content');
        const details = item.querySelector('.timeline-details');
        const date = item.querySelector('.timeline-date');
        
        if (!content || !details) return;
        
        // 点击展开详情
        content.addEventListener('click', function() {
            const isExpanded = details.classList.contains('show');
            
            // 关闭所有其他展开的详情
            document.querySelectorAll('.timeline-details.show').forEach(detail => {
                detail.classList.remove('show');
            });
            
            // 切换当前详情
            if (!isExpanded) {
                details.classList.add('show');
                showNotification('展开详细信息 📖', 'info');
            }
        });
        
        // 日期点击效果
        date.addEventListener('click', function() {
            // 创建波纹效果
            createRipple(this, { clientX: this.offsetLeft + this.offsetWidth / 2, clientY: this.offsetTop + this.offsetHeight / 2 });
            
            // 添加脉冲动画
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.6s ease';
            }, 10);
        });
        
        // 标签悬停效果
        const tags = item.querySelectorAll('.timeline-tag');
        tags.forEach(tag => {
            tag.addEventListener('click', function(e) {
                e.stopPropagation();
                showNotification(`你点击了标签: ${this.textContent} 🏷️`, 'info');
                
                // 标签弹跳效果
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });
    });
    
    // 时间线滚动动画
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // 添加延迟动画
                const index = parseInt(entry.target.dataset.index) || 0;
                entry.target.style.transitionDelay = `${index * 0.2}s`;
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// 成就交互功能
function initializeAchievementInteractions() {
    const achievementItems = document.querySelectorAll('.achievement-item');
    const modal = document.getElementById('achievementModal');
    const closeModal = document.getElementById('closeModal');
    
    if (!modal || !closeModal) return;
    
    // 成就数据
    const achievementData = {
        graduate: {
            icon: '🏆',
            title: '清华大学优秀毕业生',
            description: '以优异的成绩毕业于清华大学计算机科学与技术专业，获得学士学位。在校期间积极参与ACM编程竞赛，获得多项奖项。',
            stats: {
                'GPA': '3.9/4.0',
                '排名': '前5%',
                '奖项': '8项'
            }
        },
        mvp: {
            icon: '🎯',
            title: '微软MVP',
            description: '获得微软最有价值专家(MVP)认证，在Python开发和云计算领域做出突出贡献，积极参与技术社区分享。',
            stats: {
                '认证年份': '2022-2024',
                '技术领域': 'Python/云原生',
                '社区贡献': '50+文章'
            }
        },
        huawei: {
            icon: '🚀',
            title: '华为开发者认证',
            description: '获得华为云开发者专家认证，在分布式系统和云原生技术方面具有深厚的专业知识和实践经验。',
            stats: {
                '认证等级': '专家级',
                '技术栈': '云原生/微服务',
                '项目经验': '15+'
            }
        }
    };
    
    achievementItems.forEach(item => {
        item.addEventListener('click', function() {
            const achievement = this.dataset.achievement;
            const data = achievementData[achievement];
            
            if (data) {
                showAchievementModal(data);
                
                // 添加点击动画
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 600);
                
                // 创建庆祝效果
                createCelebrationEffect();
            }
        });
        
        // 悬停效果
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(1deg) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0) scale(1)';
        });
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
}

// 显示成就模态框
function showAchievementModal(data) {
    const modal = document.getElementById('achievementModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalStats = document.getElementById('modalStats');
    
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    
    // 清空并重新填充统计数据
    modalStats.innerHTML = '';
    Object.entries(data.stats).forEach(([label, value]) => {
        const statDiv = document.createElement('div');
        statDiv.className = 'achievement-stat';
        statDiv.innerHTML = `
            <span class="achievement-stat-number">${value}</span>
            <span class="achievement-stat-label">${label}</span>
        `;
        modalStats.appendChild(statDiv);
    });
    
    modal.classList.add('show');
}

// 创建庆祝效果
function createCelebrationEffect() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.transition = 'all 2s ease-out';
        
        document.body.appendChild(confetti);
        
        // 动画
        setTimeout(() => {
            confetti.style.top = '100%';
            confetti.style.transform += ' rotate(720deg)';
            confetti.style.opacity = '0';
        }, 100);
        
        // 清理
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// 通知系统
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 自动隐藏
    const autoHide = setTimeout(() => {
        hideNotification(notification);
    }, 4000);
    
    // 关闭按钮
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoHide);
        hideNotification(notification);
    });
    
    // 点击通知本身也可以关闭
    notification.addEventListener('click', (e) => {
        if (e.target === notification) {
            clearTimeout(autoHide);
            hideNotification(notification);
        }
    });
}

// 隐藏通知
function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// 获取通知图标
function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        info: 'ℹ️',
        warning: '⚠️',
        error: '❌'
    };
    return icons[type] || 'ℹ️';
}