const searchToggle = () => {
    const btn = document.querySelectorAll('.header__bottom_search_btn');
    const body = document.querySelectorAll('.header__bottom_search_body');
    const wrapper = document.querySelectorAll('.header__bottom_in');
    const mobWrap = document.querySelector('.mobmenu__head_main_search');
    if(wrapper && btn && body) {
        btn.forEach(bt => {
            bt.addEventListener('click', () => {
                wrapper.forEach(i => {
                    i.classList.toggle('search');
                })
                mobWrap.classList.toggle('active')
            })
        })
        
    }
    

    
}

export default searchToggle;