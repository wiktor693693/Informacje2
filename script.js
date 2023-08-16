const flash = document.querySelector('.flash');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    flash.style.left = x + 'px';
    flash.style.top = y + 'px';
    flash.style.opacity = 1;
    
    clearTimeout(flash.timeout);
    flash.timeout = setTimeout(() => {
        flash.style.opacity = 0;
    }, 500);
});