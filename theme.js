// 深色模式切换功能
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // 主题切换事件
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // 添加点击动画效果
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
    
    // 更新主题图标
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            themeToggle.title = '切换到浅色模式';
        } else {
            themeIcon.textContent = '🌙';
            themeToggle.title = '切换到深色模式';
        }
    }
    
    // 监听系统主题变化
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // 如果用户没有手动设置过主题，则跟随系统
        if (!localStorage.getItem('theme')) {
            const systemTheme = darkModeQuery.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', systemTheme);
            updateThemeIcon(systemTheme);
        }
        
        // 监听系统主题变化
        darkModeQuery.addEventListener('change', function(e) {
            // 只有用户没有手动设置时才跟随系统
            if (!localStorage.getItem('theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', systemTheme);
                updateThemeIcon(systemTheme);
            }
        });
    }
    
    // 添加键盘快捷键支持（Ctrl/Cmd + D）
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            themeToggle.click();
        }
    });
});

// 导出主题相关函数供其他模块使用
window.ThemeManager = {
    getCurrentTheme: function() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    },
    
    setTheme: function(theme) {
        if (theme === 'light' || theme === 'dark') {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // 更新图标
            const themeIcon = document.querySelector('.theme-icon');
            if (themeIcon) {
                themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
                const themeToggle = document.getElementById('themeToggle');
                if (themeToggle) {
                    themeToggle.title = theme === 'dark' ? '切换到浅色模式' : '切换到深色模式';
                }
            }
        }
    },
    
    toggleTheme: function() {
        const currentTheme = this.getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
};