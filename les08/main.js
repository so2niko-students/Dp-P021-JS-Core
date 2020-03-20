const images = [
    'https://scx1.b-cdn.net/csz/news/800/2019/2-nature.jpg',
    'https://wallpapers.net/clear-road-nature/download/800x480.jpg',
    'https://cdn.wallpapersafari.com/81/96/6nBXAj.jpg',
    'https://i.pinimg.com/originals/2a/d1/8c/2ad18c64a0a82957df02a0e7c3fa94d4.jpg'
];
const dom = {
    img : document.querySelector('.img'),
    imgContainer : document.querySelector('.images'),
    btnPrev : document.querySelector('.btn-prev'),
    btnNext : document.querySelector('.btn-next'),
    id : 0,
    imgHeight : '480'
};

dom.imgContainer.innerHTML = images.map(url=>`<img src="${url}" class="img">`).join('');

dom.btnNext.addEventListener('click',()=>{
    dom.id = dom.id == images.length - 1? 0: dom.id + 1;
    dom.imgContainer.style.top = dom.id * dom.imgHeight * -1 + 'px';
});
dom.btnPrev.addEventListener('click',()=>{
    dom.id = dom.id == 0? images.length - 1: dom.id - 1;
    dom.imgContainer.style.top = dom.id * dom.imgHeight * -1 + 'px';
});
