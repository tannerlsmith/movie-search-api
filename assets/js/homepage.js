var apiKey = "950fa26cf5f13685595dfef6323688ab"

var getMovieInfo = function(title) {
    var apiUrl = "https://api.themoviedb.org/3/movie/550?api_key=" + apiKey

    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        })
    })
}

getMovieInfo('Jarhead')