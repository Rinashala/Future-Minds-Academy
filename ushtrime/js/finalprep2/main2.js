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
let gerne = document.querySelector.getElementById("gerne");

gameList.style.display = "flex";

sortGames.innerHTML = `<option value="">choose</option>
<option value="likes">likes</option>
<option value="views">views</option>
<option value="rating">rating</option>`;

allGames = allGames.map(game => ({ ...game, desc: game.desc + " 2024" }));
renderList();
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
    }
}
function removeGameClick(i) {
    allGames.splice(i, 1);
    renderList();
}
function addNewGame() {
    let newArrGame = {
        name: gameName.value,
        desc: gameDscp.value,
        views: getviews.value,
        likes: getlikes.value,
        rating: getrating.value
    }
    allGames.push(newArrGame);
    renderList();
    clearInputs();
}
function clearInputs() {
    gameName.value = "";
    gameDscp.value = "";
    getviews.value = "";
    getlikes.value = "";
    getrating.value = "";
}

function searched() {
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
        gameList.innerHTML += `<li>no game found</li>
       `
    }
};
function sorted() {
    if (sortGames.value == "rating") {
        allGames.sort((a, b) => b.rating - a.rating)
    }
    if (sortGames.value == "views") {
        allGames.sort((a, b) => b.views - a.views)
    }
    if (sortGames.value == "likes") {
        allGames.sort((a, b) => b.likes - a.likes)
    }
    renderList();
}
function filterMostPopular() {
    gameList.innerHTML = "";
    let popularFilter = allGames.filter(game => game.views > 2000);
    popularFilter.forEach((game) => {
        gameList.innerHTML = `<li>
            <h1>${game.name}</h1>
            <p>${game.desc}</p>
            <p>${game.views}</p>
            <p>${game.likes}</p>
            <p>${game.rating}</p>
            <p><a href="#" onclick="removeGameClick(${i})">remove</a></p></li>`;
    })
}
popularGames.addEventListener("click", filterMostPopular)
sortGames.addEventListener("change", sorted)
searchBtn.addEventListener("click", searched)
AddGameBtn.addEventListener("click", addNewGame)