let spring = document.querySelector('#spring');
let summer = document.querySelector('#summer');
let fall = document.querySelector('#fall');
let winter = document.querySelector('#winter');
let allSeasons = document.querySelector('#allSeasons');
let seasons = document.querySelector('.seasons');
let main = document.querySelector('main');
let links = document.querySelectorAll('nav a');

function addImages(html) {
    main.innerHTML = html;
}

function addImage(src) {
    main.innerHTML = `<img class="seasons" src="${src}" alt="" width='300px'>`;
}

function handleFocus(target) {
    links.forEach(link => link !== target ? link.style.textDecoration = 'none' : null);
}
allSeasons.addEventListener('focus', function () {
    let imagesHtml = `
        <img width='300px' src="./Fotot/group-many-african-animals-giraffe-260nw-1922148296.webp" alt="">
        <img width='300px' src="./Fotot/ji.png" alt="">
        <img width='300px' src="./Fotot/oo.jpg" alt="">
    `;
    addImages(imagesHtml);
});

spring.addEventListener('focus', function () {
    addImage('./Fotot/3pzbkgho7pb81.webp');
    handleFocus(spring);
});

summer.addEventListener('focus', function () {
    addImage('./Fotot/group-many-african-animals-giraffe-260nw-1922148296.webp');
    handleFocus(summer);
});

fall.addEventListener('focus', function () {
    addImage('./Fotot/ji.png');
    handleFocus(fall);
});

winter.addEventListener('focus', function () {
    addImage('./Fotot/oo.jpg');
    handleFocus(winter);
});



allSeasons.style.background = 'pink';
allSeasons.style.borderRadius = '5px';
seasons.style.width = '300px';
main.style.justifyContent = 'center'
main.style.display = 'grid';


