import { state } from './data.js';
import { imgList } from './dom-elements.js';
import { createCard, cards } from './card-creation.js';

let observer;

export function loadNextBatch() {
    const start = state.currentPage * state.pageSize;
    const end = start + state.pageSize;
    const batch = state.allImages.slice(start, end);

    batch.forEach((imgObj) => {
        const card = createCard(imgObj);
        imgList.appendChild(card);
        cards.push(card);
    });

    state.currentPage++;
    if (state.currentPage * state.pageSize >= state.allImages.length) {
        observer.disconnect();
    } else {
        observeLastCard();
    }
}

export function observeLastCard() {
    observer.disconnect();
    const lastCard = imgList.lastElementChild;
    if (lastCard) {
        observer.observe(lastCard);
    }
}

observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadNextBatch();
            }
        });
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    }
);