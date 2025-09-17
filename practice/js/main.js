import './resizer.js';
import './image-upload.js';
import './preview.js';
import './drag-preview.js';
import './scroll-top-button.js';
import { imgList } from './dom-elements.js';
import { state, loadImages } from './data.js';
import { loadNextBatch } from './pagination.js';
import { setActiveCard, cards } from './card-creation.js';

function init() {
    loadImages();
    imgList.innerHTML = "";
    cards.length = 0;
    state.currentPage = 0;
    state.activeIndex = null;
    setActiveCard(null);
    loadNextBatch();
}

init();