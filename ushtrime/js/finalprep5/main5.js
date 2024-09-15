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
console.log(allGames)
gameList.style.display = "flex";

let sortGamesByVRL = ["view", "rating", "likes"];
sortGames.innerHTML = sortGamesByVRL.map((game) => `<option value="${game}">${game}</option>`).join("");
sortGames.addEventListener("change", sortedVRL)

function sortedVRL() {
    if (sortGames.value == "rating") { allGames.sort((a, b) => b.rating - a.rating) }
    if (sortGames.value == "likes") { allGames.sort((a, b) => b.likes - a.likes) }
    if (sortGames.value == "views") { allGames.sort((a, b) => b.views - a.views) }
    renderList()
}

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

AddGameBtn.addEventListener("click", add);
function add() {
    let newG = {
        name: gameName.value,
        desc: gameDscp.value,
        views: getviews.value,
        likes: getlikes.value,
        rating: getrating.value
    }
    allGames.push(newG);
    renderList();
    clearInputs();
}

function clearInputs() {
    gameName.value = "",
        gameDscp.value = "",
        getviews.value = "",
        getlikes.value = "",
        getrating.value = ""
}
function removeGameClick(i) {
    allGames.splice(i, 1);
    renderList()
}
function searched() {
    let searchterm = search.value;
    gameList.innerHTML = ""
    let filteredgames = allGames.filter((game) => game.name == searchterm);
    if (filteredgames.length > 0) {
        filteredgames.forEach((game) => {
            gameList.innerHTML = `<li>
            <h1>${game.name}</h1>
            <p>${game.desc}</p>
            <p>${game.views}</p>
            <p>${game.likes}</p>
            <p>${game.rating}</p>
            <p><a href="#" onclick="removeGameClick(${i})">remove</a></p></li>`
        })

    }
    else {
        gameList.innerHTML = `<li>
      no game found</li>`
    }

}
function filterMostPopular() {
    let popularG = allGames.filter((game) => game.views > 3000);
    gameList.innerHTML = ""
    popularG.forEach((game) => {
        gameList.innerHTML = `<li>
        <h1>${game.name}</h1>
        <p>${game.desc}</p>
        <p>${game.views}</p>
        <p>${game.likes}</p>
        <p>${game.rating}</p>
        <p><a href="#" onclick="removeGameClick(${i})">remove</a></p></li>`
    })
}


searchBtn.addEventListener("click", searched);
popularGames.addEventListener("click", filterMostPopular)