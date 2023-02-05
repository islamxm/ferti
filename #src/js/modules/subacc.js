const subacc = (wrapperQuery, itemsQuery) => {

    if(wrapperQuery && itemsQuery) {

        const wrapper = document?.querySelector(wrapperQuery);
        const items = wrapper?.querySelectorAll(itemsQuery);

        if(items?.length > 0) {

            

            const hideBody = (currentIndex) => {
                items.forEach((i, index) => {
                    const list = i.querySelector('.sub-body');
                    if(index !== currentIndex) {
                        i.classList.remove('active')
                        list.style.height = 0;
                    }
                })
            }

            

            items.forEach((i, index) => {
               

                i.addEventListener('click', e => {
                    
                    if(e.target.classList.contains('sub-head')) {
                        e.currentTarget.classList.toggle('active')
                        hideBody(index);
                        const list = e.currentTarget.querySelector('.sub-body');

                        if(i.classList.contains('active')) {
                            list.style.height = `${list.scrollHeight}px`
                        } else {
                            list.style.height = `${0}px`;
                        }
                        
                    }
                })
            })
        }
    }

}

export default subacc;