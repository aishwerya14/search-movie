const API_KEY = "20e3c766";
const base_url = "https://www.omdbapi.com/";  
const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const searchText = searchForm.querySelector("input").value;
  searchMovie(searchText);
});

async function searchMovie(searchText){
  const resp = await fetch(`${base_url}?apikey=${API_KEY}&t=${searchText}`);
  const data = await resp.json();
  console.log(data)
  const movietitle = document.querySelector("#movie-title");
  const posterImage = document.querySelector("img");
  const movieYear = document.querySelector("#movie-year");
  const rated = document.querySelector("#rated");
  const released = document.querySelector("#released");
  const runtime = document.querySelector("#runtime");
  const genre = document.querySelector("#genre");
  const director = document.querySelector("#director");
  const writer = document.querySelector("#writer");
  const actors = document.querySelector("#actors");
  const plot = document.querySelector("#plot");
  const awards = document.querySelector("#awards");
  const boxOffice = document.querySelector("#boxOffice");
  const country = document.querySelector("#country");
  const dVD = document.querySelector("#dVD");
  const language = document.querySelector("#language");
  const metascore = document.querySelector("#metascore");
  const imdbID = document.querySelector("#imdbID");
  const imdbRating = document.querySelector("#imdbRating");
  const imdbVotes = document.querySelector("#imdbVotes");
  const production = document.querySelector("#production");

  production.innerText = data.Production
  imdbVotes.innerText = data.imdbVotes
  imdbRating.innerText = data.imdbRating
  imdbID.innerText = data.imdbID
  metascore.innerText = data.Metascore
  language.innerText = data.Language
  dVD.innerText = data.DVD
  country.innerText = data.Country
  boxOffice.innerText = data.BoxOffice
  awards.innerText = data.Awards
  plot.innerText = data.Plot
  actors.innerText = data.Actors
  writer.innerText = data.Writer
  director.innerText = data.Director
  genre.innerText = data.Genre
  runtime.innerText = data.Runtime
  released.innerText = data.Released
  rated.innerText = data.Rated
  movietitle.innerText = data.Title
  plot.innerText = data.Plot;
  posterImage.src = data.Poster;
  movieYear.innerText = data.Year;
}

searchMovie("iron man")
