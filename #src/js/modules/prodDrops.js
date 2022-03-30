const dropStatus = {
    hidden: 'Показать',
    show: 'Скрыть'
}

const prodDrop = () => {
    const els = document.querySelectorAll('.prod__descr_item');

    if(els.length > 0) {
        els.forEach(el => {
            el.addEventListener('click', (e) => {
                if(e.target.classList.contains('prod__descr_item_head_btn')) {

                    el.classList.toggle('active');

                    if(el.classList.contains('active')) {
                        e.target.parentElement.nextElementSibling.style.cssText = `height: ${e.target.parentElement.nextElementSibling.scrollHeight}px`;
                        e.target.innerHTML = dropStatus.show;
                    }

                    if(!el.classList.contains('active')) {
                        e.target.parentElement.nextElementSibling.style.cssText = `height: 0px`;
                        e.target.innerHTML = dropStatus.hidden;
                    }
                    
                }
            })
        })
    }
}

export {prodDrop};