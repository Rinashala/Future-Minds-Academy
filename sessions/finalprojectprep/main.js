let newTitle = document.querySelector("#newTitle");
let addGameBtn = document.querySelector("#addGameBtn");
let newDescp = document.querySelector("#newDescp");
let newViews = document.querySelector("#newViews");
let newLikes = document.querySelector("#newLikes");
let gameList = document.querySelector("#gameList");
let description = document.querySelector("#description");
let gameTitle = document.querySelector("#gameTitle");
let gameLikes = document.querySelector("#gameLikes");
let gameViews = document.querySelector("#gameViews");

renderGameList();
addGameBtn.addEventListener("click", addGame)

function addGame() {
    let newGame = {
        name: newTitle.value,
        desc: newDescp.value,
        views: newViews.value,
        likes: newLikes.value
    }
    allGames.push(newGame);
    renderGameList()
    clearInputs()
}


function renderGameList() {
    gameList.innerHTML = "";
    for (i = 0; i < allGames.length; i++) {
        gameList.innerHTML += ` <li>
    <h1 id="gameTitle">${allGames[i].name}</h1>
    <p id="description">${allGames[i].desc}</p>
    <p id="gameLikes">${allGames[i].likes}</p>
    <p id="gameViews">${allGames[i].views}</p>
    <p id=""><a href="#" id="" onclick="removeGame(${i})">Remove</a></p>
</li>`}
};
function removeGame(i) {
    allGames.splice(i, 1);
    renderGameList()
}
function clearInputs() {
    newTitle.value = "",
        newDescp.value = "",
        newViews.value = "",
        newLikes.value = ""
}

