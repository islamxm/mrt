import Swiper, {Pagination, Navigation} from "swiper"

export const popSlider = () => {

    const slider = new Swiper('.pop__slider', {
        slidesPerView: 1,
        spaceBetween: 9,
        modules: [Navigation, Pagination],
        navigation: {
            prevEl: '.pop__slider_prev',
            nextEl: '.pop__slider_next'
        },
        pagination: {
            el: '.pop__slider_pag',
            type: 'bullets',
            bulletClass: 'pop__slider_pag_item',
            bulletActiveClass: 'pop__slider_pag_item_active',
            clickable: true
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
        }
    })
}