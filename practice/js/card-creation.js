import { state } from './data.js';
import { draggedCoords } from './dom-elements.js';
import { prevImgButton, nextImgButton, previewImage, previewCaption, previewSection } from './dom-elements.js';

export let cards = [];
export let draggedCard = null;

export function createCard(imageObj) {
    const li = document.createElement("li");
    li.classList.add("card");
    li.setAttribute("draggable", "true");
    li.dataset.image = JSON.stringify(imageObj);

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = imageObj.src;
    img.alt = imageObj.alt;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = imageObj.name;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    li.appendChild(figure);

    li.addEventListener("click", () => {
        const imgData = JSON.parse(li.dataset.image);
        const foundIndex = state.allImages.findIndex(img => img.src === imgData.src && img.name === imgData.name);
        if (foundIndex !== -1) {
            setActiveCard(foundIndex);
        }
    });

    li.addEventListener("dragstart", dragStartHandler);
    li.addEventListener("dragend", dragEndHandler);
    return li;
}


export function updateNavButtons() {
    prevImgButton.disabled = state.activeIndex === 0;
    nextImgButton.disabled = state.activeIndex === state.allImages.length - 1;
}


export function setActiveCard(index) {
    if (state.activeIndex !== null) {
        cards[state.activeIndex].classList.remove("active");
    }
    state.activeIndex = index;
    if (state.activeIndex !== null) {
        cards[state.activeIndex].classList.add("active");
        previewImage.src = state.allImages[state.activeIndex].src;
        previewImage.alt = state.allImages[state.activeIndex].alt;
        previewCaption.textContent = state.allImages[state.activeIndex].name;
        previewSection.classList.add("active");
        updateNavButtons();
    } else {
        previewImage.src = "";
        previewImage.alt = "";
        previewCaption.textContent = "You didn't select an image from the gallery";
        previewSection.classList.remove("active");
    }
}


function dragStartHandler(e) {
    draggedCoords.classList.add("visible");
    draggedCard = e.currentTarget;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", draggedCard.dataset.index);

    document.removeEventListener("mousemove", updateDragCoords);
    draggedCard.addEventListener("drag", updateDragCoords);
}

function dragEndHandler(e) {
    draggedCoords.classList.remove("visible");
    if (draggedCard) {
        draggedCard.removeEventListener("drag", updateDragCoords);
    }
    draggedCoords.textContent = "";
    draggedCard = null;
}

function updateDragCoords(e) {
    if (!draggedCard) {
        return;
    }
    const x = e.clientX;
    const y = e.clientY;
    if (x === 0 && y === 0) {
        return;
    }
    draggedCoords.textContent = `x: ${x}, y: ${y}`;
}

export { dragStartHandler, dragEndHandler, updateDragCoords };