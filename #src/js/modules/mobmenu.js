const mobmenu = () => {
    const triggers = document.querySelectorAll('.burger-btn');
    const close = document.querySelector('.mobmenu__head_close');
    const menu = document.querySelector('.mobmenu');
  

    if(triggers?.length > 0 && close && menu) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => menu.classList.add('active'))
        })
        close.addEventListener('click', () => menu.classList.remove('active'))
    }
}

export default mobmenu;