const allgernes = document.querySelector('#allgernes');
const movieThumb = document.querySelector('#movieThumb');

for (let i = 0; i < allMovies.length; i++) {
    allgernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`;
}

function loadMovies(g) {
    const selectedGenreMovies = allMovies[g].movies;
    movieThumb.innerHTML = "";
    for (let i = 0; i < allMovies.length; i++) {

        movieThumb.innerHTML += `<li>
                            <h4>${selectedGenreMovies[i].title}</h4>
                            <img src="assets/img/${selectedGenreMovies[i].thumb}" alt="" class="img-xl">
                            <p>${selectedGenreMovies[i].desc}</p>
                            <p>${selectedGenreMovies[i].actors}</p>
                            <p>length: ${selectedGenreMovies[i].date}</p>
                            <p>date: ${selectedGenreMovies[i].length}</p>
      </li>`;
    }
}