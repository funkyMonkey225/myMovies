var movieURL = 'http://www.omdbapi.com/?apikey=1ca32dee&';
var posterURL = 'http://img.omdbapi.com/?apikey=1ca32dee&';
var $searchField = $('[data-role="search-form"]');

function getMovieData(search) {
    var req = $.get(movieURL + "s=" + search);
    req
        .then(makeMovieElement);
} 
    
function listMovies(orders) {
    localStorage.setItem('priorOrders', JSON.stringify(orders));
}

function deleteMovie(movie) {
    var req = $.ajax ({
        url: URL + '/' + email.attr('name'),
        method: "DELETE"
    })
}

function addMovieSearchListner() {
    $searchField.submit(function (event){
        event.preventDefault();
        var searchValue = $('[data-role="movie-search"]').val();
        console.log(searchValue);
        getMovieData(searchValue);

    })
}

function makeMovieElement(response) {
    console.log(response);
}

function makePosterElement() {

}

function main() {
    addMovieSearchListner();
}

main();