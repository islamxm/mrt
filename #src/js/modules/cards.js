export const cards = () => {
    const els = document.querySelectorAll('.card');

    if(els.length > 0) {
        els.forEach(el => {
            el.addEventListener('mouseover', (e) => {
                let ex = e.currentTarget.querySelector('.card__body_ex');

                ex.style.cssText = `height: ${ex.scrollHeight}px`;
            })

            el.addEventListener('mouseout', (e) => {
                let ex = e.currentTarget.querySelector('.card__body_ex');

                ex.style.cssText = `height: 0px`;
            })
        })
    }
}