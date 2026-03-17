let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // 隐藏所有图片
    slides.forEach(slide => slide.classList.remove('active'));
    
    // 处理循环显示
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // 显示当前图片
    slides[currentSlide].classList.add('active');
}

// 按钮控制
function moveSlide(step) {
    showSlide(currentSlide + step);
}

// 自动轮播（每 5 秒切换一次）
setInterval(() => {
    moveSlide(1);
}, 5000);

// 初始化
showSlide(currentSlide);

function updateLiveTime() {
    const now = new Date();
    
    // 获取年月日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    // 获取时分秒
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // 写入 HTML
    document.getElementById('date-part').textContent =   `${year}年${month}月${day}日`;
    //document.getElementById('time-part').textContent = `      ${hours}:${minutes}:${seconds}`;
// &nbsp; 代表一个不换行空格
document.getElementById('time-part').innerHTML = `&nbsp;&nbsp;${hours}:${minutes}:${seconds}`;

}

// 每秒更新一次
setInterval(updateLiveTime, 1000);

// 页面加载完成后立即执行一次，防止白屏等待一秒
window.onload = updateLiveTime;





