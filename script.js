$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
      let searchInput = $('#searchInput').val();
      searchMovies(searchInput);
      e.preventDefault();
    });
  });

const resultGrid = document.getElementById('result-grid');
// const searchInput = document.getElementById('searchInput');
// const searchBtn = document.getElementById('searchBtn');
// const container = document.getElementById('container');

 function searchMovies(searchInput){
    // const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=89703b08`;
    // const res = await fetch(`${URL}`);
    // const res = await fetch(`https://www.omdbapi.com/?s=${searchInput.value.trim()}&apikey=e668e570`)
    // const data = await res.json();
    // const movies = data.Search;
    axios.get('http://www.omdbapi.com?s='+searchInput+'&apikey=e668e570')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
        <div class="cards">
                        <div class="card" >
                            <img src=${movie.Poster} class="card-poster" />

                        <div class="card-header">
                        <a class="anchor" onclick="movieSelected('${movie.imdbID}')" href="#">Movie Details</a>
                            <h5>Title: ${movie.Title}</h5>
                        </div>

                        <div class="card-meta">
                            <p>Year: ${movie.Year}</p>
                        </div>
                    </div>
                    </div>
        `;
    });

    $('#result-grid').html(output);
  })
  .catch((err) => {
    console.log(err);
  });
}

    
    // movies.forEach(async (movie)=>{
    //     let response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=e668e570`);
    //     let moviesListData = await response.json();
    //     const completePlot = moviesListData.Plot;
    //     const movieID = moviesListData.imdbID;

        // const movieIDkey = moviesListData.imdbID + 'key';

        // resultGrid.innerHTML += `
        // <div class="cards">
        //                 <div class="card" id=${movieID}>
        //                     <img src=${moviesListData.Poster} class="card-poster" />

        //                 <div class="card-header">
        //                     <a onclick="movieSelected('${movie.imdbID}')" class="card-title" href="#">Title: ${moviesListData.Title}</a>
        //                     <p class="card-rating">IMDB Rating: ${moviesListData.imdbRating}</p>
        //                 </div>

        //                 <div class="card-meta">
        //                     <p class="card-runtime">Duration: ${moviesListData.Runtime}</p>
        //                     <p>Genre: ${moviesListData.Genre}</p>
        //                     <p>Year: ${movie.Year}</p>
        //                 </div>
        //                 <p class="card-plot">Movie plot: ${completePlot}</p>
        //             </div>
        //             </div>
        //             `
               
   

function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

 function getMovie(){
    let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com?i='+movieId +'&apikey=e668e570')
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output =`
      <div class="card" >
                            <img src=${movie.Poster} class="card-poster" />

                        <div class="card-header">
                            <h2 class="card-title">Title: ${movie.Title}</h2>
                            <p class="card-rating">IMDB Rating: ${movie.imdbRating}</p>
                        </div>

                        <div class="card-meta">
                            <p class="card-runtime">Actors: ${movie.Actors}</p>
                            <p>Genre: ${movie.Genre}</p>
                            <p>Year: ${movie.Year}</p>
                            <p>Director: ${movie.Director}</p>
                        </div>
                        <p class="card-plot">Movie plot: ${movie.Plot}</p>
                    </div>  
      <a href="index.html" class="anchor">Go Back To Search</a>
          </div>
        </div>
      `;

      $('#container').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
    }

            // resultGrid.innerHTML += `
            // <div class="card" id=${movieID}>
            //                 <img src=${moviesListData.Poster} class="card-poster" />

            //             <div class="card-header">
            //                 <h2 class="card-title">Title: ${moviesListData.Title}</h2>
            //                 <p class="card-rating">IMDB Rating: ${moviesListData.imdbRating}</p>
            //             </div>

            //             <div class="card-meta">
            //                 <p class="card-runtime">Duration: ${moviesListData.Runtime}</p>
            //                 <p>Genre: ${moviesListData.Genre}</p>
            //             </div>
            //             <p class="card-plot">Movie plot: ${moviesListData.Plot}</p>
            //         </div>
            // `
        
    
    // for(let i=0; i<data.Search.length; i++){
    //     const img = document.createElement('img');
    //     img.src = data.Search[i].Poster;
    //     resultGrid.appendChild(img);
        
    //     const title = document.createElement('p');
    //     title.innerText = "Title: " + data.Search[i].Title;
    //     title.addEventListener('click',showMovie());
    //     resultGrid.appendChild(title);

    //     const year = document.createElement('p');
    //     year.innerText = "year: " + data.Search[i].Year;
    //     resultGrid.appendChild(year);

        // function showMovie(){
        //     const resp = await fetch(`https://www.omdbapi.com/?i=${data.Search[i].imdbId}&apikey=e668e570`);
        //     const subData = await resp.json();
        //     const movieInfo = document.createElement('p');
        //     movieInfo.innerText = "Movie info: " + subData[i].Plot;
        //     resultGrid.appendChild()

        // }
        // resultGrid.appendChild(data.Search[i]);
    // const img = document.createElement('img');
    // img.src = data.Search[1].Poster;
    // resultGrid.appendChild(img);

// loadMovies("Superman");