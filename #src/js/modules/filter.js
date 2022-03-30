export const filter = () => {

    const btn = document.querySelector('.list__body_head_btn');
    const menu = document.querySelector('.filter');
    const close = document.querySelector('.filter__head_btn');

    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.add('active');
        })
        close.addEventListener('click', () => {
            menu.classList.remove('active');
        })
    }
}