export const mobmenuToggler = () => {
    const trigger = document.querySelector('#mobmenuTrigger');
    const closeBtn = document.querySelector('#mobmenuClose');
    const block = document.querySelector('.mobmenu');

    if(trigger) {
        trigger.addEventListener('click', () => {
            block.classList.add('active');
        })
    }
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            block.classList.remove('active');
        })
    }
}