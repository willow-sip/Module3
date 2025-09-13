"use strict;"

//creating array with image files' data
let allImages = [];
for (let i = 0; i < 100; i++) {
    allImages.push({
        name: `Cat picture № ${i+1}`,
        src: `./imgs/img${i+1}.jpg`,
        alt: `Cat picture № ${i+1}`
    });
}

//for pagination
const pageSize = 3;
let currentPage = 0;

//all DOM variables
const imageListSection = document.getElementById("image-list-section");
const imgList = document.getElementById("image-list");
const scrollToTopButton = document.getElementById("scroll-top-button");
const draggedCoords = document.getElementById("dragged-img-coords");

const addImageForm = document.getElementById("add-image-form");
const imageNameInput = document.getElementById("image-name");
const imageFileInput = document.getElementById("image-file");
const addFileButton = document.getElementById("add-file-button");
const fileNameLabel = document.getElementById("file-name-label");

const previewSection = document.getElementById("preview-section");
const previewImage = document.getElementById("preview-image");
const previewCaption = document.getElementById("preview-caption");
const closePreviewButton = document.getElementById("close-preview");
const prevImgButton = document.getElementById("previous-button");
const nextImgButton = document.getElementById("next-button");

const resizer = document.getElementById("resizer");
const leftPane = document.getElementById("image-list-section");
const rightPane = document.getElementById("preview-section");
const container = document.getElementById("gallery-container");

//for manipulating cards
let activeIndex = null;
let cards = [];
let draggedCard = null;
prevImgButton.disabled = true;
nextImgButton.disabled = true;

//resizer logic
let isDragging = false;
resizer.addEventListener("mousedown", (e) => {
    isDragging = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
});

function handleResize(e) {
    if (!isDragging){
        return;
    }
    const containerWidth = container.offsetWidth;
    const minLeft = containerWidth * 0.3;
    const minRight = containerWidth * 0.2;

    const newLeftWidth = e.clientX - container.getBoundingClientRect().left;
    const newRightWidth = containerWidth - newLeftWidth - resizer.offsetWidth;

    if (newLeftWidth >= minLeft && newRightWidth >= minRight) {
        leftPane.style.flexBasis = `${newLeftWidth}px`;
        leftPane.style.flexGrow = 0;
        rightPane.style.flexBasis = `${newRightWidth}px`;
        rightPane.style.flexGrow = 0;
    }
}

function stopResize() {
    isDragging = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
}

//helper function of card creation
function createCard(imageObj) {
    const li = document.createElement("li");
    li.classList.add("card");
    li.setAttribute("draggable", "true");
    li.dataset.image = JSON.stringify(imageObj); //used instead of simple indexation to cope with imgs added by user

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
        const foundIndex = allImages.findIndex(img => img.src === imgData.src && img.name === imgData.name);
        if (foundIndex !== -1) {
            setActiveCard(foundIndex);
        }
    });

    li.addEventListener("dragstart", dragStartHandler);
    li.addEventListener("dragend", dragEndHandler);
    return li;
}

//adding new images
addFileButton.addEventListener("click", () => {
    imageFileInput.click();
});
imageFileInput.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
        fileNameLabel.textContent = this.files[0].name;
        fileNameLabel.classList.add("visible");
    } else {
        fileNameLabel.classList.remove("visible");
        fileNameLabel.textContent = "";
    }
});
addImageForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = imageNameInput.value.trim();
    const file = imageFileInput.files[0]; 
    const imageUrl = URL.createObjectURL(file);
    const newImage = {
        name: name,
        src: imageUrl,
        alt: name
    };

    allImages.unshift(newImage);

    const newCard = createCard(newImage);
    imgList.prepend(newCard);
    cards.unshift(newCard); 
    fileNameLabel.classList.remove("visible");
    fileNameLabel.textContent = "";
    addImageForm.reset();
});

//loading pagination
function loadNextBatch() {
    const start = currentPage * pageSize;
    const end = start + pageSize;
    const batch = allImages.slice(start, end);

    batch.forEach((imgObj, i) => {
        const card = createCard(imgObj);
        imgList.appendChild(card);
        cards.push(card);
    });

    currentPage++;
    if (currentPage * pageSize >= allImages.length) {
        observer.disconnect();
    } else {
        observeLastCard();
    }
}

//observer for "infinite" images appearance
const observer = new IntersectionObserver(
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
function observeLastCard() {
    observer.disconnect();
    const lastCard = imgList.lastElementChild;
    if (lastCard) {
        observer.observe(lastCard);
    }
}

//changing active card
function setActiveCard(index) {
    if (activeIndex !== null) {
        cards[activeIndex].classList.remove("active");
    }
    activeIndex = index;
    if (activeIndex !== null) {
        cards[activeIndex].classList.add("active");
        previewImage.src = allImages[activeIndex].src;
        previewImage.alt = allImages[activeIndex].alt;
        previewCaption.textContent = allImages[activeIndex].name;
        previewSection.classList.add("active");
        updateNavButtons();
    } else {
        previewImage.src = "";
        previewImage.alt = "";
        previewCaption.textContent = "You didn't select an image from the gallery";
        previewSection.classList.remove("active");
    }
}

//conditions for preview buttons to work
function updateNavButtons() {
    prevImgButton.disabled = activeIndex === 0;
    nextImgButton.disabled = activeIndex === allImages.length - 1;
}
closePreviewButton.addEventListener("click", () => {
    if (activeIndex !== null) {
        cards[activeIndex].classList.remove("active");
    }
    activeIndex = null;
    setActiveCard(null);
    prevImgButton.disabled = true;
    nextImgButton.disabled = true;
});
prevImgButton.addEventListener("click", () => {
    if (activeIndex > 0) {
        setActiveCard(activeIndex - 1);
    }
});
nextImgButton.addEventListener("click", () => {
    if (activeIndex < allImages.length - 1) {
        setActiveCard(activeIndex + 1);
    }
});

//functionality of keyboard arrows
document.addEventListener("keydown", (e) => {
    if (activeIndex === null) {
        return;
    }
    if (e.key === "ArrowLeft") {
        if (activeIndex > 0) {
            setActiveCard(activeIndex - 1);
        }
    } else if (e.key === "ArrowRight") {
        if (activeIndex < allImages.length - 1) {
            setActiveCard(activeIndex + 1);
        }
    }
});


//dragging coordinates functionality
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
    if (!draggedCard){
        return;
    }
    const x = e.clientX;
    const y = e.clientY;
    if (x === 0 && y === 0) {
        return;
    }
    draggedCoords.textContent = `x: ${x}, y: ${y}`;
}


//dragging also, but into the preview
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
        const foundIndex = allImages.findIndex(img => img.src === imgData.src && img.name === imgData.name);
        if (foundIndex !== -1) {
            setActiveCard(foundIndex);
        }
    }
});


//for the button to scroll top to appear
imageListSection.addEventListener("scroll", () => {
    const scrollTop = imageListSection.scrollTop;
    const clientHeight = imageListSection.clientHeight;
    const scrollHeight = imageListSection.scrollHeight;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
    if (distanceFromBottom <= 50) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    imageListSection.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
        if (imageListSection.scrollTop === 0) {
            scrollToTopButton.style.display = "none";
        }
    }, 300);
});


//combining all the script together and running app
function init() {
    imgList.innerHTML = "";
    cards = [];
    currentPage = 0;
    activeIndex = null;
    setActiveCard(null);
    loadNextBatch();
}
init();

