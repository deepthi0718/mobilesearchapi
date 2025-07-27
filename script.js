let api ="https://www.omdbapi.com/?apikey=3878bc2b&t=";


let title = document.querySelector('#tittle');
let desc = document.querySelector('#desc');
let Actor = document.querySelector('#Actors');
let director = document.querySelector('#directors');
let awards = document.querySelector('#awards');
let collection = document.querySelector('#collection');
let ln = document.querySelector('#ln');
let rating = document.querySelector('#rating');
let poster = document.querySelector('#poster');
let genre = document.querySelector('#Genre');
let container = document.querySelector('.container');
let error = document.querySelector('#error');
let loader = document.querySelector('#loader');

container.classList.add('hidden')


function search(){
    let movieInput = document.getElementById('movieName');
    let query = api + movieInput.value;
    loader.style.display = 'block';
    fetch(query).then(data=> data.json()).then((data)=>{
        loader.style.display = 'none';
        error.innerText = '';
        if (data.Error === 'Movie not found!') {
        error.innerText = 'Movie not found!';
        container.classList.add('hidden'); // 👈 hide old movie result
        }

        else{
        container.classList.remove('hidden');
        title.innerHTML = data.Title;
        desc.innerHTML = data.Plot;
        Actor.innerHTML = data.Actors;
        director.innerHTML = data.Director;
        awards.innerHTML = data.Awards;
        collection.innerHTML= data.BoxOffice;
        ln.innerHTML = data.Language;
        poster.src = data.Poster;
        genre.innerHTML = data.Genre;
        rating.innerHTML = data.imdbRating;
        
        }
    });
    movieInput.value = "";
}

