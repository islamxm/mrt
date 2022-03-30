import Swiper, {Navigation} from 'swiper';

export const examplesSlider = () => {
    const slider = new Swiper('.examples__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        modules: [Navigation],
        navigation: {
            prevEl: '.examples__slider_prev',
            nextEl: '.examples__slider_next'
        },

        breakpoints: {
            500: {
                slidesPerView: 2,
            }
        }
    });


}