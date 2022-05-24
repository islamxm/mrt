export const addC = () => {
    const menu = document.querySelector('.addc');
    const openBtn = document.querySelector('.bv__action_btn');
    const closeBtn = document.querySelector('.addc__body_close');

    if(openBtn) {
        openBtn.addEventListener('click', (e) => {
            menu.classList.add('active');
        })
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            menu.classList.remove('active');
        })
    }
}