export const up = () => {
    const btn = document.querySelector('#upBtn');
    const wrapper = document.querySelector('.wrapper');

    if(btn && wrapper) {
        btn.addEventListener('click', () => {
            wrapper.scrollTo(0, 0);
        })
    }
}