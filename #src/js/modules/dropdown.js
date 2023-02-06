// import getCoords from "./getCoords";
const getCoords = (elem) => {
    let box = elem.getBoundingClientRect();
    return {
        top: box.y,
        right: box.x,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

const dropdown = (elemsQuery) => {
    const elems = document.querySelectorAll(elemsQuery);
    if(elems?.length > 0) {
        elems.forEach(i => {
            const elemCoords = getCoords(i);
            const menu = i.querySelector('.drop-body');
            menu.style.cssText = `top: ${elemCoords.top}px; left: ${elemCoords.left}px`
            i.addEventListener('mouseover', e => {
                i.classList.add('active')
            })
            i.addEventListener('mouseleave', e => {
                i.classList.remove('active')
            })
        })
        
    }
   
}

export default dropdown;