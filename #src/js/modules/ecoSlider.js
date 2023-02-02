import Swiper, {Navigation} from "swiper";

const ecoSlider = () => {
    const el = document.querySelector('.ecoParts__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 4,
            spaceBetween: 26,
            modules: [Navigation],
            navigation: {
                prevEl: '.ecoParts__body_slider_nav_item-prev',
                nextEl: '.ecoParts__body_slider_nav_item-next'
            }
        })
    }
}

export default ecoSlider;