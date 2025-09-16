export const state = {
    allImages: [],
    pageSize: 3,
    currentPage: 0,
    activeIndex: null
};

for (let i = 0; i < 100; i++) {
    state.allImages.push({
        name: `Cat picture № ${i+1}`,
        src: `./imgs/img${i+1}.jpg`,
        alt: `Cat picture № ${i+1}`
    });
}