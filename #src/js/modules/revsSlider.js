import Swiper, {Navigation, Thumbs} from 'swiper';

export const revsSlider = () => {

    

    const mainThumbs = new Swiper('.revs__body_thumbs', {
        slidesPerView: 4,
        spaceBetween: 15,
        modules: [Navigation],
        navigation: {
            prevEl: '.revs__body_thumbs_nav_prev',
            nextEl: '.revs__body_thumbs_nav_next'
        },
        
        
    })

    const mainSlider = new Swiper('.revs__body_slider', {
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
        modules: [Thumbs],
        thumbs: {
            swiper: mainThumbs
        }
    });
}