import { imageListSection, scrollToTopButton } from './dom-elements.js';

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