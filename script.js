// 1. 实现根据时间自动显示欢迎语
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) {
    greetingElement.innerText = "早上好！";
} else if (hour < 18) {
    greetingElement.innerText = "下午好！";
} else {
    greetingElement.innerText = "晚上好！";
}

// 2. 实现按钮点击弹窗
const clickBtn = document.getElementById('click-me');
clickBtn.addEventListener('click', () => {
    alert('🎉 恭喜！你成功触发了 JavaScript 动作脚本！');
});

// 3. 实现深色模式切换
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    // 切换 body 的 dark-mode 类名
    document.body.classList.toggle('dark-mode');
    
    // 更改按钮文字提示
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = "浅色模式";
    } else {
        themeToggle.innerText = "深色模式";
    }
});
