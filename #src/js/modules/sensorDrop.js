export const sensorDrop = () => {
    const btns = document.querySelectorAll('.sensor-list-drop-trigger');


    if(btns.length > 0) {

        btns.forEach(el => {

            el.addEventListener('click', (e) => {
                console.log(el.previousElementSibling);
                if(el.previousElementSibling.classList.contains('list-hidden')) {
                    el.previousElementSibling.classList.toggle('active');

                    if(el.previousElementSibling.classList.contains('active')) {
                        el.previousElementSibling.style.cssText = `height: ${el.previousElementSibling.scrollHeight}px `;

                        el.innerHTML = 'Скрыть';
                    }

                    if(!el.previousElementSibling.classList.contains('active')) {
                        el.previousElementSibling.style.cssText = `height: 0px `;

                        el.innerHTML = 'Показать все';
                    }
                }
            })
        })
    }
}