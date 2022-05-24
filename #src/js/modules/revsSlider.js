import Swiper, {Navigation, Pagination, Thumbs} from 'swiper';

export const revsSlider = () => {

    const el = document.querySelector('.revs__body_slider');

    if(el) {
        const mainSlider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                800: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                }
            },
            modules: [Pagination],
            pagination: {
                el: '.revs__body_pag',
                type: 'bullets',
                bulletClass: 'revs__body_pag_item',
                bulletActiveClass: 'active',
            }
        });
    }
    


    
}