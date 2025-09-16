import { state } from './data.js';
import { previewSection } from './dom-elements.js';
import { draggedCard, setActiveCard } from './card-creation.js';

previewSection.addEventListener("dragover", (e) => {
    e.preventDefault();
});

previewSection.addEventListener("drop", (e) => {
    e.preventDefault();
    if (!draggedCard){
        return;
    }
    const rect = previewSection.getBoundingClientRect();
    if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
    ) {
        const imgData = JSON.parse(draggedCard.dataset.image);
        const foundIndex = state.allImages.findIndex(img => img.src === imgData.src && img.name === imgData.name);
        if (foundIndex !== -1) {
            setActiveCard(foundIndex);
        }
    }
});