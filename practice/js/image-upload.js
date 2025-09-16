import { state } from './data.js';
import { imageFileInput, fileNameLabel, addImageForm, imageNameInput, imgList } from './dom-elements.js';
import { createCard } from './card-creation.js';

const addFileButton = document.getElementById("add-file-button");

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

    state.allImages.unshift(newImage);

    const newCard = createCard(newImage);
    imgList.prepend(newCard);
    fileNameLabel.classList.remove("visible");
    fileNameLabel.textContent = "";
    addImageForm.reset();
});