import { state } from './data.js';
import { closePreviewButton, prevImgButton, nextImgButton } from './dom-elements.js';
import { cards, setActiveCard } from './card-creation.js';

//those values are default because upin initial load there's
//no loaded img, therefore there's nothing to switch for previous/next
prevImgButton.disabled = true;
nextImgButton.disabled = true;

closePreviewButton.addEventListener("click", () => {
    if (state.activeIndex !== null) {
        cards[state.activeIndex].classList.remove("active");
    }
    state.activeIndex = null;
    setActiveCard(null);
    prevImgButton.disabled = true;
    nextImgButton.disabled = true;
});

prevImgButton.addEventListener("click", () => {
    if (state.activeIndex > 0) {
        setActiveCard(state.activeIndex - 1);
    }
});

nextImgButton.addEventListener("click", () => {
    if (state.activeIndex < state.allImages.length - 1) {
        setActiveCard(state.activeIndex + 1);
    }
});

document.addEventListener("keydown", (e) => {
    if (state.activeIndex === null) {
        return;
    }
    if (e.key === "ArrowLeft") {
        if (state.activeIndex > 0) {
            setActiveCard(state.activeIndex - 1);
        }
    } else if (e.key === "ArrowRight") {
        if (state.activeIndex < state.allImages.length - 1) {
            setActiveCard(state.activeIndex + 1);
        }
    }
});