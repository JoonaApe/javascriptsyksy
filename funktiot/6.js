'use strict'
function startRating() {
  const numMovies = parseInt(prompt("Enter the number of movies you want to rate:"));
  const movies = [];

  for (let i = 0; i < numMovies; i++) {
    const title = prompt(`Enter the title of movie ${i + 1}:`);
    const rating = parseFloat(prompt(`Rate ${title} (1 to 5):`));

    movies.push({ title, rating });
  }

  function sortMovies(a, b) {
    return b.rating - a.rating;
  }
  movies.sort(sortMovies);

  console.log(movies);

  for (const movie of movies) {
    const td1 = document.createElement("td");
    td1.innerText = movie.title;

    const td2 = document.createElement("td");
    td2.innerText = movie.rating;

    const tr = document.createElement("tr");
    tr.append(td1);
    tr.append(td2);

    document.getElementById('kohde').append(tr);
  }

  const fav = movies[0];
  document.getElementById('fav').innerText = fav.title;
}

startRating();
