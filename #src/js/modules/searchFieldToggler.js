export const searchFieldToggler = () => {
    const el = document.querySelector('#searchFieldToggler');
    const block = document.querySelector('#searchFeild');
    const closeBtn = document.querySelector('#searchFieldClose');

    if(el && window.innerWidth <= 650) {
        el.addEventListener('click', () => {
            block.classList.add('active');
        })
        closeBtn.addEventListener('click', () => {
            block.classList.remove('active');
        })
    }

    window.addEventListener('resize', () => {
        if(el && window.innerWidth <= 650) {
            el.addEventListener('click', () => {
                block.classList.add('active');
            })
            closeBtn.addEventListener('click', () => {
                block.classList.remove('active');
            })
        }
    })
}