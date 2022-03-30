import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

export const prodGallery = () => {
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            Carousel: {
                fill: false,
                center: true,
            },
        },
    });
}