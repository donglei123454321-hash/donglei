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



