const shText = (wrapperQuery, triggerQuery, bodyQuery, hiddenQuery) => {
    const wrapper = document.querySelectorAll(wrapperQuery);

    if(wrapper?.length > 0) {
        wrapper.forEach(wr => {
            const btn = wr.querySelector(triggerQuery);
            const body = wr.querySelector(bodyQuery)
            const toggleBody = body.querySelector(hiddenQuery);

            if(btn && body && toggleBody) {
                btn.addEventListener('click', (e) => {
                    btn.classList.toggle('active');
                    
                    if(btn.classList.contains('active')) {
                        body.classList.add('active');
                        toggleBody.style.height = `${toggleBody?.scrollHeight}px`;
                        btn.innerHTML = 'Скрыть'
                    } else {
                        body.classList.remove('active');
                        toggleBody.style.height = `${0}px`;
                        btn.innerHTML = 'Показать еще'
                    }
                    
                })
            }
        })
    }
}

export default shText;