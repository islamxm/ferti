import Swiper, {Navigation} from "swiper";

const doctorSr = () => {
    const el = document.querySelector('.doctorSr__body');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 25,
            slidesPerView: 3,
            modules: [Navigation],
            navigation: {
                prevEl: '.doctorSr__nav_btn-prev',
                nextEl: '.doctorSr__nav_btn-next'
            }
        })
    }
}

export default doctorSr;