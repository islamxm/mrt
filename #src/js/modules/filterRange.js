import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const filterRange = () => {


}

let btnStatus = {
    btnShow: 'показать еще',
    btnHide: 'скрыть'
}



const filterDrop = () => {
    const items = document.querySelectorAll('.filter__item');

    if(items.length > 0) {
        items.forEach(i => {
            
            let hiddenList = i.querySelector('.filter__item_body-hide');
            let btn = i.querySelector('.filterToggler');

            if(btn) {
                btn.addEventListener('click', () => {
                    i.classList.toggle('active');
    
                    if(i.classList.contains('active')) {
                        hiddenList.style.cssText = `height: ${hiddenList.scrollHeight}px`;
                        btn.innerHTML = btnStatus.btnHide;
                    }
                    if(!i.classList.contains('active')) {
                        hiddenList.style.cssText = `height: 0px`;
                        btn.innerHTML = btnStatus.btnShow;
                    }
                })
            }
            
        })
    }
}


export {filterRange, filterDrop};