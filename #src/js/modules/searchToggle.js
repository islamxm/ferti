const searchToggle = () => {
    const btn = document.querySelector('.header__bottom_search_btn');
    const body = document.querySelector('.header__bottom_search_body');
    const wrapper = document.querySelector('.header__bottom_in');

    if(wrapper && btn && body) {
        btn.addEventListener('click', () => {
            wrapper.classList.toggle('search');
        })
    }
}

export default searchToggle;