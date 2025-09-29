// 多语言支持
const translations = {
    zh: {
        // 导航
        nav_home: "首页",
        nav_about: "关于我",
        nav_projects: "项目",
        nav_skills: "技能",
        nav_contact: "联系",
        
        // 首页
        hero_title: "欢迎来到我的作品集",
        hero_subtitle: "我是一名开发者，热爱创造优秀的数字体验",
        cta_button: "查看我的作品",
        
        // 关于我
        about_title: "关于我",
        about_role: "Python Developer",
        about_description1: "我是一名专注于Python开发的软件工程师，擅长消息中间件、实时数据处理、高可用架构设计。拥有丰富的后端开发经验，致力于构建高性能、可扩展的系统架构。",
        about_description2: "在技术之外，我喜欢Rust编程语言，热爱动漫文化，特别是《幸运星》、《孤独摇滚》、《摇曳露营》等作品。这些爱好让我保持创造力和对生活的热情。",
        achievements_title: "个人成就",
        achievement_1: "🏆 清华大学优秀毕业生",
        achievement_2: "🎯 微软MVP",
        achievement_3: "🚀 华为开发者认证",
        timeline_title: "专业经历",
        timeline_education_1: "清华大学",
        timeline_education_1_desc: "计算机科学与技术专业，学士学位",
        timeline_education_2: "斯坦福大学",
        timeline_education_2_desc: "计算机科学专业，硕士学位",
        timeline_work_1: "Google",
        timeline_work_1_desc: "软件工程师，负责分布式系统开发",
        timeline_work_2: "OpenAI",
        timeline_work_2_desc: "软件工程师，参与AI基础设施构建",
        
        // 项目
        projects_title: "我的项目",
        project_1_title: "AI智能客服系统",
        project_1_desc: "基于自然语言处理的智能客服系统，集成多轮对话管理和情感分析，提升客户服务效率80%。",
        project_2_title: "分布式消息队列系统",
        project_2_desc: "高性能分布式消息队列系统，支持百万级并发，实现消息可靠传输和负载均衡，延迟低于5ms。",
        project_3_title: "实时数据分析平台",
        project_3_desc: "基于Flink的实时数据处理平台，支持PB级数据实时分析，提供可视化监控和告警功能。",
        project_demo: "查看演示",
        project_source: "源代码",
        
        // 技能
        skills_title: "技能",
        core_tech_stack: "核心技术栈",
        backend_tech: "后端技术",
        tools_frameworks: "工具与框架",
        skill_1: "消息中间件架构设计",
        skill_2: "实时数据处理系统",
        skill_3: "高可用性系统架构",
        skill_4: "分布式系统开发",
        skill_5: "Python异步编程",
        skill_6: "微服务架构",
        skill_7: "数据库优化",
        skill_8: "API设计与开发",
        skill_9: "容器化部署",
        skill_10: "Django / FastAPI",
        skill_11: "Redis / RabbitMQ",
        skill_12: "Docker / Kubernetes",
        skill_13: "AWS / GCP",
        skill_14: "Git / CI/CD",
        
        // 联系
        contact_title: "联系我",
        contact_description: "如果您对我的工作感兴趣，或者有项目合作的想法，欢迎与我联系！我专注于Python开发和系统架构设计，期待与您交流技术心得。",
        contact_email: "📧 邮箱：",
        contact_website: "🌐 个人网页：",
        contact_location: "📍 位置：",
        social_media: "社交媒体",
        personal_blog: "个人博客",
        email_contact: "邮箱联系",
        quick_contact: "快速联系",
        form_name: "姓名：",
        form_email: "邮箱：",
        form_message: "留言：",
        form_name_placeholder: "请输入您的姓名",
        form_email_placeholder: "请输入您的邮箱地址",
        form_message_placeholder: "请描述您的项目需求或想法",
        submit_button: "发送消息",
        
        // 页脚
        footer_copyright: "© 2024 我的个人作品集. 保留所有权利.",
        footer_github: "GitHub",
        footer_linkedin: "LinkedIn",
        footer_weibo: "微博"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        
        // Hero
        hero_title: "Welcome to My Portfolio",
        hero_subtitle: "I'm a developer passionate about creating excellent digital experiences",
        cta_button: "View My Work",
        
        // About
        about_title: "About Me",
        about_role: "Python Developer",
        about_description1: "I am a software engineer specializing in Python development, with expertise in message middleware, real-time data processing, and high-availability architecture design. I have extensive backend development experience and am committed to building high-performance, scalable system architectures.",
        about_description2: "Beyond technology, I love the Rust programming language and am passionate about anime culture, especially works like 'Lucky Star', 'Bocchi the Rock', and 'Laid-Back Camp'. These hobbies keep me creative and passionate about life.",
        achievements_title: "Personal Achievements",
        achievement_1: "🏆 Outstanding Graduate of Tsinghua University",
        achievement_2: "🎯 Microsoft MVP",
        achievement_3: "🚀 Huawei Developer Certification",
        timeline_title: "Professional Experience",
        timeline_education_1: "Tsinghua University",
        timeline_education_1_desc: "Bachelor's degree in Computer Science and Technology",
        timeline_education_2: "Stanford University",
        timeline_education_2_desc: "Master's degree in Computer Science",
        timeline_work_1: "Google",
        timeline_work_1_desc: "Software Engineer, responsible for distributed system development",
        timeline_work_2: "OpenAI",
        timeline_work_2_desc: "Software Engineer, participated in AI infrastructure building",
        
        // Projects
        projects_title: "My Projects",
        project_1_title: "AI Intelligent Customer Service System",
        project_1_desc: "An NLP-based intelligent customer service system with multi-turn dialogue management and sentiment analysis, improving customer service efficiency by 80%.",
        project_2_title: "Distributed Message Queue System",
        project_2_desc: "High-performance distributed message queue system supporting millions of concurrent connections, achieving reliable message transmission and load balancing with latency under 5ms.",
        project_3_title: "Real-time Data Analytics Platform",
        project_3_desc: "Flink-based real-time data processing platform supporting PB-level data analysis with visualization monitoring and alerting capabilities.",
        project_demo: "View Demo",
        project_source: "Source Code",
        
        // Skills
        skills_title: "Skills",
        core_tech_stack: "Core Technology Stack",
        backend_tech: "Backend Technology",
        tools_frameworks: "Tools & Frameworks",
        skill_1: "Message Middleware Architecture Design",
        skill_2: "Real-time Data Processing Systems",
        skill_3: "High Availability System Architecture",
        skill_4: "Distributed System Development",
        skill_5: "Python Asynchronous Programming",
        skill_6: "Microservices Architecture",
        skill_7: "Database Optimization",
        skill_8: "API Design & Development",
        skill_9: "Containerized Deployment",
        skill_10: "Django / FastAPI",
        skill_11: "Redis / RabbitMQ",
        skill_12: "Docker / Kubernetes",
        skill_13: "AWS / GCP",
        skill_14: "Git / CI/CD",
        
        // Contact
        contact_title: "Contact Me",
        contact_description: "If you're interested in my work or have project collaboration ideas, feel free to contact me! I specialize in Python development and system architecture design, and look forward to exchanging technical insights with you.",
        contact_email: "📧 Email:",
        contact_website: "🌐 Personal Website:",
        contact_location: "📍 Location:",
        social_media: "Social Media",
        personal_blog: "Personal Blog",
        email_contact: "Email Contact",
        quick_contact: "Quick Contact",
        form_name: "Name:",
        form_email: "Email:",
        form_message: "Message:",
        form_name_placeholder: "Please enter your name",
        form_email_placeholder: "Please enter your email address",
        form_message_placeholder: "Please describe your project requirements or ideas",
        submit_button: "Send Message",
        
        // Footer
        footer_copyright: "© 2024 My Personal Portfolio. All rights reserved.",
        footer_github: "GitHub",
        footer_linkedin: "LinkedIn",
        footer_weibo: "Weibo"
    }
};

// 当前语言
let currentLanguage = 'zh';

// 切换语言函数
function switchLanguage(lang) {
    currentLanguage = lang;
    updatePageLanguage();
    updateLanguageSelector();
    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// 更新页面语言
function updatePageLanguage() {
    const trans = translations[currentLanguage];
    
    // 导航
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = trans.nav_home;
        navLinks[1].textContent = trans.nav_about;
        navLinks[2].textContent = trans.nav_projects;
        navLinks[3].textContent = trans.nav_skills;
        navLinks[4].textContent = trans.nav_contact;
    }
    
    // 首页
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    if (heroTitle) heroTitle.textContent = trans.hero_title;
    if (heroSubtitle) heroSubtitle.textContent = trans.hero_subtitle;
    if (ctaButton) ctaButton.textContent = trans.cta_button;
    
    // 关于我
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) aboutTitle.textContent = trans.about_title;
    
    const aboutTextH3 = document.querySelector('.about-text h3');
    if (aboutTextH3) aboutTextH3.textContent = trans.about_role;
    
    const aboutTextP = document.querySelectorAll('.about-text p');
    if (aboutTextP.length >= 2) {
        aboutTextP[0].textContent = trans.about_description1;
        aboutTextP[1].textContent = trans.about_description2;
    }
    
    const timelineSectionH3 = document.querySelector('.timeline-section h3');
    if (timelineSectionH3) timelineSectionH3.textContent = trans.timeline_title;
    
    // 个人成就
    const aboutTextH3List = document.querySelectorAll('.about-text h3');
    if (aboutTextH3List.length >= 2) {
        aboutTextH3List[1].textContent = trans.achievements_title;
    }
    
    const achievementItems = document.querySelectorAll('.achievement-item');
    if (achievementItems.length >= 3) {
        achievementItems[0].textContent = trans.achievement_1;
        achievementItems[1].textContent = trans.achievement_2;
        achievementItems[2].textContent = trans.achievement_3;
    }
    
    // 时间线
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length >= 4) {
        timelineItems[0].querySelector('h4').textContent = trans.timeline_education_1;
        timelineItems[0].querySelector('p').textContent = trans.timeline_education_1_desc;
        timelineItems[1].querySelector('h4').textContent = trans.timeline_education_2;
        timelineItems[1].querySelector('p').textContent = trans.timeline_education_2_desc;
        timelineItems[2].querySelector('h4').textContent = trans.timeline_work_1;
        timelineItems[2].querySelector('p').textContent = trans.timeline_work_1_desc;
        timelineItems[3].querySelector('h4').textContent = trans.timeline_work_2;
        timelineItems[3].querySelector('p').textContent = trans.timeline_work_2_desc;
    }
    
    // 项目
    const projectsTitle = document.querySelector('#projects .section-title');
    if (projectsTitle) projectsTitle.textContent = trans.projects_title;
    
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length >= 3) {
        projectCards[0].querySelector('h3').textContent = trans.project_1_title;
        projectCards[0].querySelector('p').textContent = trans.project_1_desc;
        projectCards[1].querySelector('h3').textContent = trans.project_2_title;
        projectCards[1].querySelector('p').textContent = trans.project_2_desc;
        projectCards[2].querySelector('h3').textContent = trans.project_3_title;
        projectCards[2].querySelector('p').textContent = trans.project_3_desc;
    }
    
    // 项目链接
    const projectLinks = document.querySelectorAll('.project-link');
    if (projectLinks.length >= 6) {
        projectLinks[0].textContent = trans.project_demo;
        projectLinks[1].textContent = trans.project_source;
        projectLinks[2].textContent = trans.project_demo;
        projectLinks[3].textContent = trans.project_source;
        projectLinks[4].textContent = trans.project_demo;
        projectLinks[5].textContent = trans.project_source;
    }
    
    // 技能
    const skillsTitle = document.querySelector('#skills .section-title');
    if (skillsTitle) skillsTitle.textContent = trans.skills_title;
    
    const skillCategories = document.querySelectorAll('.skill-category h3');
    if (skillCategories.length >= 3) {
        skillCategories[0].textContent = trans.core_tech_stack;
        skillCategories[1].textContent = trans.backend_tech;
        skillCategories[2].textContent = trans.tools_frameworks;
    }
    
    // 技能列表
    const skillItems = document.querySelectorAll('.skill-list li');
    if (skillItems.length >= 14) {
        skillItems[0].textContent = trans.skill_1;
        skillItems[1].textContent = trans.skill_2;
        skillItems[2].textContent = trans.skill_3;
        skillItems[3].textContent = trans.skill_4;
        skillItems[4].textContent = trans.skill_5;
        skillItems[5].textContent = trans.skill_6;
        skillItems[6].textContent = trans.skill_7;
        skillItems[7].textContent = trans.skill_8;
        skillItems[8].textContent = trans.skill_9;
        skillItems[9].textContent = trans.skill_10;
        skillItems[10].textContent = trans.skill_11;
        skillItems[11].textContent = trans.skill_12;
        skillItems[12].textContent = trans.skill_13;
        skillItems[13].textContent = trans.skill_14;
    }
    
    // 联系
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) contactTitle.textContent = trans.contact_title;
    
    const contactInfoP = document.querySelector('.contact-info > p');
    if (contactInfoP) contactInfoP.textContent = trans.contact_description;
    
    // 联系信息
    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems.length >= 3) {
        contactItems[0].querySelector('strong').textContent = trans.contact_email;
        contactItems[1].querySelector('strong').textContent = trans.contact_website;
        contactItems[2].querySelector('strong').textContent = trans.contact_location;
    }
    
    // 社交媒体
    const socialMediaH4 = document.querySelector('.social-media h4');
    if (socialMediaH4) socialMediaH4.textContent = trans.social_media;
    
    const socialButtons = document.querySelectorAll('.social-btn');
    if (socialButtons.length >= 2) {
        const blogSpan = socialButtons[0].querySelector('span:last-child');
        const emailSpan = socialButtons[1].querySelector('span:last-child');
        if (blogSpan) blogSpan.textContent = trans.personal_blog;
        if (emailSpan) emailSpan.textContent = trans.email_contact;
    }
    
    // 联系表单
    const contactFormContainerH3 = document.querySelector('.contact-form-container h3');
    if (contactFormContainerH3) contactFormContainerH3.textContent = trans.quick_contact;
    
    const formLabels = document.querySelectorAll('.form-group label');
    if (formLabels.length >= 3) {
        formLabels[0].textContent = trans.form_name;
        formLabels[1].textContent = trans.form_email;
        formLabels[2].textContent = trans.form_message;
    }
    
    // 表单占位符
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    if (nameInput) nameInput.placeholder = trans.form_name_placeholder;
    if (emailInput) emailInput.placeholder = trans.form_email_placeholder;
    if (messageInput) messageInput.placeholder = trans.form_message_placeholder;
    
    // 提交按钮
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) submitButton.textContent = trans.submit_button;
    
    // 页脚
    const footerP = document.querySelector('.footer p');
    if (footerP) footerP.textContent = trans.footer_copyright;
    
    const footerLinks = document.querySelectorAll('.social-link');
    if (footerLinks.length >= 3) {
        footerLinks[0].textContent = trans.footer_github;
        footerLinks[1].textContent = trans.footer_linkedin;
        footerLinks[2].textContent = trans.footer_weibo;
    }
}

// 更新语言选择器
function updateLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// 初始化语言选择器 - 只添加事件监听器，不再创建元素
function initLanguageSelector() {
    // 为已存在的语言按钮添加事件监听器
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSelector();
    updatePageLanguage();
});