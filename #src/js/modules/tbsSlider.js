import Swiper from 'swiper';

export const tbsSlider = () => {
    const slider = new Swiper('.tbs__in', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            1250: {
                slidesPerView: 6,
                spaceBetween: 30
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    })
}