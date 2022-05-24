import Swiper, { Navigation } from 'swiper';

export const qtsSlider = () => {

    const slider = new Swiper('.qts__slider', {
        slidesPerView: 1,
        spaceBetween: 11,
        modules: [Navigation],
        navigation: {
            nextEl: '.qts__next'
        },
        breakpoints: {
            1000: {
                slidesPerView: 2,
            },
            578: {
                spaceBetween: 24,
                slidesPerView:1,
            }
        }
    })
}