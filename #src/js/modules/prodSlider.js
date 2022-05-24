import Swiper, {Thumbs, Navigation} from 'swiper';


export const prodSlider = () => {

    const thumbSlider = new Swiper('.prod__main_thumbs', {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 20,
        
        slideToClickedSlide: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.prod__main_thumbs_next',
            prevEl: '.prod__main_thumbs_prev'
        },

        breakpoints: {

            1000: {
                slidesPerView: 4,
                spaceBetween: 20,
                direction: 'vertical',
            },
            800: {
                direction: 'vertical',
            },
            550: {
                slidesPerView: 4,
                direction: 'horizontal',
            }
        }
    })

    const mainSlider = new Swiper('.prod__main_slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        modules: [Thumbs],
        thumbs: {
            swiper: thumbSlider
        }
    })
}