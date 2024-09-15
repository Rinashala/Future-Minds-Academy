function displayGames() {
    const gameList = document.getElementById("gameList");
    gameList.innerHTML = '';

    allGames.forEach((game, index) => {
        gameList.innerHTML += `
            <h1>${game.name}</h1>
            <p>${game.desc}</p>
            <p>Views: ${game.views}</p>
            <p>Likes: ${game.likes}</p>
            <p>Rating: ${game.rating}</p>
            <p><a href="#" onclick="removeGame(${index})">Remove</a></p>
            <button onclick="editGame(${index})">Edit</button>
        
        `;
    });
}

function removeGame(index) {
    allGames.splice(index, 1);
    displayGames();
}

function editGame(index) {
    const gameList = document.getElementById("gameList");
    const li = gameList.children[index];

    const game = allGames[index];

    gameList.innerHTML = `
        <input type="text" value="${game.name}" id="editName${index}">
        <textarea id="editDesc${index}">${game.desc}</textarea> <br>
        <input type="number" value="${game.views}" id="editViews${index}">
       <input type="number" value="${game.likes}" id="editLikes${index}">
       <input type="number" value="${game.rating}" id="editRating${index}">
        <button onclick="saveGame(${index})">Save</button>
        <button onclick="displayGames()">Cancel</button>
    `;
}

function saveGame(index) {

    const updatedName = document.getElementById(`editName${index}`).value;
    const updatedDesc = document.getElementById(`editDesc${index}`).value;
    const updatedViews = parseInt(document.getElementById(`editViews${index}`).value);
    const updatedLikes = parseInt(document.getElementById(`editLikes${index}`).value);
    const updatedRating = parseFloat(document.getElementById(`editRating${index}`).value);

    allGames[index] = {
        name: updatedName,
        desc: updatedDesc,
        views: updatedViews,
        likes: updatedLikes,
        rating: updatedRating
    };

    displayGames();
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
    displayGames();
    clearInputs();
}
displayGames();
