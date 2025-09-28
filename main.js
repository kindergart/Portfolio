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