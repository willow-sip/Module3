import { resizer, leftPane, rightPane, container } from './dom-elements.js';

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