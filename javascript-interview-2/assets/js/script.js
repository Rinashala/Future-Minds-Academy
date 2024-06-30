const allgernes = document.querySelector('#allgernes');
const movieThumb = document.querySelector('#movieThumb');

for (let i = 0; i < allMovies.length; i++) {
    allgernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`;

}
function loadMovies(g) {
    console.log(g)
    for (let i = 0; i < 8; i++) {
        movieThumb.innerHTML += ` <li>
                            <h4>${allMovies[g].movies[i].title}</h4>
                            <img src="assets/img/ballerina.png" alt="" class="img-xl">
                            <p>desc</p>
                            <p>authors</p>
                            <p>length: 108 min</p>
                            <p>date: 10-20-2023</p>
                        </li>`;
    }

}

