import * as flsFuncs from './modules/functions.js';
import accordeon from './modules/accordeon.js';
import ecoSlider from './modules/ecoSlider.js';
import dropdown from './modules/dropdown.js';
import searchToggle from './modules/searchToggle.js';
import MicroModal from 'micromodal';
import subacc from './modules/subacc.js';
import mobmenu from './modules/mobmenu.js';
import shText from './modules/shText.js';
import doctorSlider from './modules/doctorSlider.js';
import doctorSr from './modules/doctorSr.js';

flsFuncs.isWebp();



document.addEventListener('DOMContentLoaded', () => {
    
    ecoSlider();
    accordeon('.sidebar__main', '.sidebar__main_item');
    accordeon('.sidebar__nav', '.sidebar__nav_item');
    accordeon('.pricesBlock__list', '.pricesBlock__item')
    // accordeon('.mobmenu__body', '.mobmenu__body_item-drop')
    // subacc('.mobmenu__body_item_menu_list', '.mobmenu__body_item_menu_item-submenu')
    dropdown('.drop-item')
    document.addEventListener('scroll', () => dropdown('.drop-item'))
    searchToggle();
    mobmenu();
    shText('.textBlock', '.textBlock__action_btn', '.textBlock__body', '.textBlock__toggle')
    MicroModal.init({
        disableScroll: true
    });
    doctorSlider();
    doctorSr();

    let revStars = document.querySelectorAll('.item__stars_el');

    if(revStars) {
        revStars.forEach(item => {
            item.addEventListener('click', () => {
                const { itemValue } = item.dataset;
                item.parentNode.dataset.totalValue = itemValue;
            })
        })
    }


    const menuItems = document.querySelectorAll('.menu-item');
    const submenuItems = document.querySelectorAll('.submenu-item');
    if(menuItems?.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target.classList.contains('menu-item-head')) {
                    e.target.parentElement.classList.toggle('active');
                }
            })
        })
    }
    if(submenuItems?.length > 0) {
        submenuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target.classList.contains('submenu-item-head')) {
                    e.target.parentElement.classList.toggle('active')
                }
            })
        })
    }
})