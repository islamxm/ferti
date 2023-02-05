import * as flsFuncs from './modules/functions.js';
import accordeon from './modules/accordeon.js';
import ecoSlider from './modules/ecoSlider.js';
import dropdown from './modules/dropdown.js';
import searchToggle from './modules/searchToggle.js';
import MicroModal from 'micromodal';
import subacc from './modules/subacc.js';
import mobmenu from './modules/mobmenu.js';

flsFuncs.isWebp();



document.addEventListener('DOMContentLoaded', () => {
    
    ecoSlider();
    accordeon('.sidebar__main', '.sidebar__main_item');
    accordeon('.sidebar__nav', '.sidebar__nav_item');
    // accordeon('.mobmenu__body', '.mobmenu__body_item-drop')
    // subacc('.mobmenu__body_item_menu_list', '.mobmenu__body_item_menu_item-submenu')
    dropdown('.drop-item')
    searchToggle();
    mobmenu();
    MicroModal.init({
        disableScroll: true
    });


})