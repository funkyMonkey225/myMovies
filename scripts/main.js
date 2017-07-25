var movieURL = 'http://www.omdbapi.com/?apikey=1ca32dee&';
var posterURL = 'http://img.omdbapi.com/?apikey=1ca32dee&';
var $searchField = $('[data-role="search-form"]');
var $movieDisplay = $('[data-role="display-movies"]');

function getMovieData(search) {
    var req = $.get(movieURL + "s=" + search);
    req
        .then(makeMovieElement);
} 
    
// function getPosterData(ident) {
//     var req = $.get(posterURL + "h=250&i=" + ident);
// } 

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
    if ($movieDisplay.children()) {
        $movieDisplay.empty();
    }
    var responseArray = response["Search"];
    var $searchResults = $('<div></div>', {
        'class': 'results',
        'data-draw': 'results'
    });
    responseArray.forEach(function(movie, i) {
        var $movieDiv = $('<div></div>', {
        'class': 'movie',
        'data-draw': 'movie'
    });
        var $poster = makePosterElement(responseArray[i]["imdbID"], responseArray[i]['Title']);
        var $title = $('<span></span>', {
            'text': responseArray[i]['Title'] + " (" + responseArray[i]['Year'] + ")"
        })
        $movieDiv.append($poster);
        $movieDiv.append($title);
        $searchResults.append($movieDiv);
    })

    $movieDisplay.append($searchResults);
}

function makePosterElement(ident, title) {
    return $('<img>', {
        'src': posterURL + "h=300&i=" + ident,
        'alt': title + " movie poster"
    });
}

function main() {
    addMovieSearchListner();
}

main();