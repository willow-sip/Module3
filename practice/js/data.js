export const state = {
    allImages: [],
    pageSize: 3,
    currentPage: 0,
    activeIndex: null
};

export function loadImages(count = 100) {
    state.allImages.length = 0;
    for (let i = 0; i < count; i++) {
        state.allImages.push({
            name: `Cat picture № ${i + 1}`,
            src: `./imgs/img${i + 1}.jpg`,
            alt: `Cat picture № ${i + 1}`
        });
    }
}