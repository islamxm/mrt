import { addC } from './modules/addC.js';
import { cards } from './modules/cards.js';
import { cmAnswer } from './modules/cmAnswer.js';
import { examplesSlider } from './modules/examplesSlider.js';
import { filter } from './modules/filter.js';
import { filterDrop } from './modules/filterRange.js';
import * as flsFuncs from './modules/functions.js';
import { mobmenuToggler } from './modules/mobmenuToggler.js';
import { popSlider } from './modules/popSlider.js';
import { prodDrop } from './modules/prodDrops.js';
import { prodGallery } from './modules/prodGallery.js';
import { prodSlider } from './modules/prodSlider.js';
import { qtsSlider } from './modules/qtsSlider.js';
import { revsSlider } from './modules/revsSlider.js';
import { searchFieldToggler } from './modules/searchFieldToggler.js';
import { sensorDrop } from './modules/sensorDrop.js';
import { tbsSlider } from './modules/tbsSlider.js';
import { telMask } from './modules/telMask.js';
import { up } from './modules/up.js';


import {heroSlider} from './modules/heroSlider.js';
import { tabs } from './modules/tabs.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();



    up();
    searchFieldToggler();
    mobmenuToggler();
    // tbsSlider();
    cards();
    popSlider();
    qtsSlider();
    filterDrop();
    filter();
    prodSlider();
    prodDrop();
    examplesSlider();
    cmAnswer();
    prodGallery();
    sensorDrop();
    revsSlider();
    addC();
    telMask(); 
    
    


    heroSlider();
    tabs('.prod__tabs_container', '.prod__tabs', '.prod__tabs_item', '.prod__tabs_content_item');
})



