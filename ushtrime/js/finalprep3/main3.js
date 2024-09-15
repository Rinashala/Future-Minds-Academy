let search = document.getElementById("search");
let sortGames = document.getElementById("sortGames");
let gameName = document.getElementById("gameName");
let gameDscp = document.getElementById("gameDscp");
let getviews = document.getElementById("getviews");
let getlikes = document.getElementById("getlikes");
let getrating = document.getElementById("getrating");
let AddGameBtn = document.getElementById("AddGameBtn");
let gameList = document.getElementById("gameList");
let searchBtn = document.getElementById("searchBtn");
let popularGames = document.getElementById("popularGames");

renderList();
gameList.style.display = "flex"

let sortGamesByVRL = ["view", "ratings", "likes"];
sortGames.innerHTML = sortGamesByVRL.map((category) => `<option value="${category}">${category}</option>`).join("");
sortGames.addEventListener("change", () => {
    if (sortGames.value == "ratings") allGames.sort((a, b) => a.rating - b.rating);
    if (sortGames.value == "views") allGames.sort((a, b) => a.views - b.views);
    if (sortGames.value == "likes") allGames.sort((a, b) => a.likes - b.likes);
    renderList();
})
function renderList() {
    gameList.innerHTML = "";
    for (i = 0; i < allGames.length; i++) {
        gameList.innerHTML += `<li>
            <h1>${allGames[i].name}</h1>
            <p>${allGames[i].desc}</p>
            <p>${allGames[i].views}</p>
            <p>${allGames[i].likes}</p>
            <p>${allGames[i].rating}</p>
            <p><a href="#" onclick="removeGameClick(${i})">remove</a></p></li>`
    };
}
function removeGameClick(i) {
    allGames.splice(i, 1);
    renderList();
}
function addNewGame() {
    let newObjgame = {
        name: gameName.value,
        desc: gameDscp.value,
        views: getviews.value,
        likes: getlikes.value,
        rating: getrating.value
    }
    allGames.push(newObjgame);
    renderList();
    clearInputs();
}
function clearInputs() {
    gameName.value = "";
    gameDscp.value = "";
    getlikes.value = "";
    getrating.value = "";
    getviews.value = "";
}
function searchGame() {
    let searchTerm = search.value;
    gameList.innerHTML = "";
    let filteredGames = allGames.filter(game => game.name.includes(searchTerm));
    if (filteredGames.length > 0) {
        filteredGames.forEach(game => {
            gameList.innerHTML += `<li>
            <h1>${game.name}</h1>
            <p>${game.desc}</p>
            <p>${game.views}</p>
            <p>${game.likes}</p>
            <p>${game.rating}</p>
            <p><a href="#" onclick="removeGameClick(${i})">remove</a></p></li>`
        })
    }
    else {
        gameList.innerHTML = "<li><p>no games matched</p></li>";
    }
}
function filterMostPopular() {
    let mostPopular = allGames.filter(game => game.views > 2000);
    gameList.innerHTML = "";
    if (mostPopular.length > 0) {
        mostPopular.forEach((game) => {
            gameList.innerHTML += `<li>
            <h1>${game.name}</h1>
            <p>${game.desc}</p>
            <p>${game.views}</p>
            <p>${game.likes}</p>
            <p>${game.rating}</p>
            <p><a href="#" onclick="removeGameClick(${i})">remove</a></p></li>`
        })
    }
};

popularGames.addEventListener("click", filterMostPopular)
searchBtn.addEventListener("click", searchGame)
AddGameBtn.addEventListener("click", addNewGame)