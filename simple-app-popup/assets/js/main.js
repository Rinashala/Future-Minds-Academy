const spring = document.querySelector(".spring");
const summer = document.querySelector(".summer");
const winter = document.querySelector(".winter");
const fall = document.querySelector(".fall");
const allSeasons = document.querySelector(".allSeasons");
const title = document.querySelector(".title");
const imgContainer = document.querySelector(".imgContainer");

function changeSeason(season, imagePath) {
    imgContainer.innerHTML = `<img class="img-xxl seasonImg" src="${imagePath}" alt="${season}"/>`;
    title.textContent = season;
}

spring.addEventListener("click", () => changeSeason("spring", "assets/images/spring.png"));
summer.addEventListener("click", () => changeSeason("summer", "assets/images/summer.png"));
winter.addEventListener("click", () => changeSeason("winter", "assets/images/winter.png"));
fall.addEventListener("click", () => changeSeason("fall", "assets/images/fall.png"));

allSeasons.addEventListener("click", () => {
    title.textContent = "all seasons";
    imgContainer.innerHTML = `
        <img class="img-xxl seasonImg" src="assets/images/spring.png" alt="Spring"/>
        <img class="img-xxl seasonImg" src="assets/images/summer.png" alt="Summer"/>
        <img class="img-xxl seasonImg" src="assets/images/winter.png" alt="Winter"/>
        <img class="img-xxl seasonImg" src="assets/images/fall.png" alt="Fall"/>
    `;
});
