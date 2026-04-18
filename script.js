// Плавное включение следования после прокрутки 300px
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('header nav');
    let mouseX = 0, mouseY = 0;
    let followIntensity = 0;
    let targetIntensity = 0; // Добавляем целевую интенсивность для плавности
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function smoothFollow() {
        // Плавно приближаем followIntensity к targetIntensity
        followIntensity += (targetIntensity - followIntensity) * 0.1;
        
        // Рассчитываем движение в зависимости от интенсивности
        const moveX = (mouseX / window.innerWidth - 0.5) * 40 * followIntensity;
        const moveY = (mouseY / window.innerHeight - 0.5) * 30 * followIntensity;
        
        //  nav.style.transform = `translate(${moveX}px, ${moveY}px)`;
        requestAnimationFrame(smoothFollow);
    }
    
    // Отслеживаем прокрутку
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= 300) {
            // После 300px - targetIntensity = 1
            targetIntensity = 1;
        } else {
            // До 300px - targetIntensity = 0
            targetIntensity = 0;
        }
    });
    
    smoothFollow();
});

// Отключаем восстановление скролла
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Сразу убираем якорь и скролл
window.scrollTo(0, 0);

