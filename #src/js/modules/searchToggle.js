const searchToggle = () => {
    const btn = document.querySelectorAll('.header__bottom_search_btn');
    const body = document.querySelectorAll('.header__bottom_search_body');
    const wrapper = document.querySelectorAll('.header__top_in');
    const mobWrap = document.querySelector('.mobmenu__head_main_search');
    const sr = document.querySelectorAll('.header__bottom_search');
    if(wrapper && btn?.length > 0 && body && sr?.length > 0) {
        btn.forEach(bt => {
            bt.addEventListener('click', () => {
                wrapper.forEach(i => {
                    i.classList.toggle('search');
                })
                mobWrap.classList.toggle('active')
            })
        })

        sr.forEach(i => {
            i.addEventListener('click', (e) => {
                if(e.target.classList.contains('header__bottom_search_layer')) {
                    wrapper.forEach(i => {
                        i.classList.remove('search');
                    })
                    mobWrap.classList.remove('active')
                }
            } )
        })
       
    }
    

    
}

export default searchToggle;