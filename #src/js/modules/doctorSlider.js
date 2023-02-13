import Swiper, {Navigation} from "swiper";


const doctorSlider = () => {
    const el = document.querySelector('.doctorSlider__body');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 20,
            slidesPerView: 1,
            modules:[Navigation],
            navigation: {
                prevEl: '.doctorSlider__nav_btn-prev',
                nextEl: '.doctorSlider__nav_btn-next'
            },
            breakpoints: {
                768: {
                    spaceBetween: 50,
                    slidesPerView: 2,
                }
            }
        })
    }
}

export default doctorSlider;