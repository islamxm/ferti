import * as flsFuncs from './modules/functions.js';
import accordeon from './modules/accordeon.js';
import ecoSlider from './modules/ecoSlider.js';
import dropdown from './modules/dropdown.js';
import searchToggle from './modules/searchToggle.js';

flsFuncs.isWebp();



document.addEventListener('DOMContentLoaded', () => {
    
    ecoSlider();
    accordeon('.sidebar__main', '.sidebar__main_item');
    accordeon('.sidebar__nav', '.sidebar__nav_item');
    dropdown('.drop-item')
    searchToggle();
})