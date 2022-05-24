import Swiper, {Pagination, Navigation} from 'swiper';

export const heroSlider = () => {
    const el = document.querySelector('.hero__slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation, Pagination],
            navigation: {
                prevEl: '.hero__nav_prev',
                nextEl: '.hero__nav_next'
            },
            pagination: {
                el:'.hero__pag',
                type: 'bullets',
                bulletClass: 'hero__pag_item',
                bulletActiveClass: 'active',
                clickable: true,
            }
        })
    }
}
