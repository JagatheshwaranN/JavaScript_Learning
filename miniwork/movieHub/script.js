// Base URL for The Movie Database (TMDb) API
const BASE_URL = 'https://api.themoviedb.org/3';

// Endpoint paths for different types of movie data
const ORIGINALS_PATH = '/discover/tv'; // Path for discovering TV shows
const TRENDING_PATH = '/trending/movie/week'; // Path for trending movies of the week
const TOP_RATED_PATH = '/movie/top_rated'; // Path for top-rated movies
const TRAILER_MOVIE_PATH = '/movie/'; // Path for fetching movie trailers

// API key for authentication with TMDb API
const API_KEY = '19f84e11932abbc79e6d83f82d6d1045';

// Path constants for accessing specific fields in movie data
const PT_PATH = 'poster_path'; // Path for poster images
const BD_PATH = 'backdrop_path'; // Path for backdrop images

// URL for embedding YouTube trailers
const YT_TRAILER_URL = 'https://www.youtube.com/embed/';

// Execute the provided function when the window has fully loaded
window.onload = () => {
    // Call the function to get and display original content
    getOriginals();

    // Call the function to get and display trending movies
    getTrendingNow();

    // Call the function to get and display top-rated movies
    getTopRated();
}

// Asynchronous function to fetch movie data from a given URL and display it
const fetchMovies = async (url, domElement, pathType) => {
    try {
        // Make an asynchronous fetch request to the specified URL
        const response = await fetch(url);

        // Parse the JSON response received from the API
        const result = await response.json();

        // Check if the response status is OK (HTTP status code 200)
        if (response.ok) {
            // If successful, call the function to display movies on the webpage
            showMovies(result, domElement, pathType);
        } else {
            // If not successful, log an error message with the API error code and message
            throw new Error(`Error: ${result.cod} - ${result.message}`);
        }
    } catch (error) {
        // Catch any errors that may occur during the fetch or parsing process
        console.error("Error fetching the movie data: ", error);
    }
}

// Function to display movies on the webpage
showMovies = (movies, domElement, pathType) => {
    // Base URL for movie poster images
    const movieImagePath = 'https://image.tmdb.org/t/p/original';

    // Get the DOM element where movies will be displayed
    let movieSectionElement = document.querySelector(domElement);

    // Loop through each movie in the results
    for (let movie of movies.results) {
        // Create an image element for the movie
        let movieImageElement = document.createElement('img');

        // Set a data attribute for the movie ID
        movieImageElement.setAttribute('data-id', movie.id);

        // Set the source (src) of the image to the movie poster URL
        movieImageElement.src = `${movieImagePath}${movie[pathType]}`;

        // Add an event listener for the click event on the movie image
        movieImageElement.addEventListener('click', element => {
            // Call a function to handle the selection of the movie
            handleMovieSelection(element);
        });

        // Append the movie image element to the specified DOM element
        movieSectionElement.appendChild(movieImageElement);
    }
}

// Function to get and display original content
function getOriginals() {
    // Network ID for original content
    let networkId = 213;

    // Construct the URL for fetching original content using TMDb API
    let url = `${BASE_URL}${ORIGINALS_PATH}?api_key=${API_KEY}&with_networks=${networkId}`;

    // DOM element where the original content will be displayed
    let movieTypeDOM = '.original__movies';

    // Call the fetchMovies function to fetch and display original content
    fetchMovies(url, movieTypeDOM, PT_PATH);
}

// Function to get and display trending movies
function getTrendingNow() {
    // Construct the URL for fetching trending movies using TMDb API
    let url = `${BASE_URL}${TRENDING_PATH}?api_key=${API_KEY}`;

    // DOM element where trending movies will be displayed
    let movieTypeDOM = '#trending';

    // Call the fetchMovies function to fetch and display trending movies
    fetchMovies(url, movieTypeDOM, BD_PATH);
}

// Function to get and display top-rated movies
function getTopRated() {
    // Language for movie data
    let lang = 'en-US';

    // Page number for pagination
    let page = 1;

    // Construct the URL for fetching top-rated movies using TMDb API
    let url = `${BASE_URL}${TOP_RATED_PATH}?api_key=${API_KEY}&language=${lang}&page=${page}`;

    // DOM element where top-rated movies will be displayed
    let movieTypeDOM = '#top_rated';

    // Call the fetchMovies function to fetch and display top-rated movies
    fetchMovies(url, movieTypeDOM, BD_PATH);
}

// Asynchronous function to fetch the trailer for a specific movie by its ID
async function getMovieTrailer(id) {
    // Language for movie data
    let lang = 'en-US';

    // Construct the URL for fetching movie trailers using TMDb API
    var url = `${BASE_URL}${TRAILER_MOVIE_PATH}${id}/videos?api_key=${API_KEY}&language=${lang}`;

    // Use 'await' to wait for the fetch request to complete
    return await fetch(url).then(response => {
        // Check if the response status is OK (HTTP status code 200)
        if (response.ok) {
            // If successful, parse the JSON response
            return response.json();
        } else {
            // If not successful, throw an error
            throw new Error("Error fetching the trailer data");
        }
    });
}

// Function to set the trailer in an iframe based on the provided trailers array
const setTrailer = trailers => {
    // Get the iframe element by its ID
    const iframe = document.getElementById('movieTrailer');

    // Get the element representing the message for when a trailer is not found
    const movieNotFound = document.querySelector('.movieNotFound');

    // Check if there are trailers available
    if (trailers.length > 0) {
        // If there are trailers, hide the "not found" message and show the iframe
        movieNotFound.classList.add('d-none');
        iframe.classList.remove('d-none');

        // Set the source (src) of the iframe to the first trailer's key
        iframe.src = `${YT_TRAILER_URL}${trailers[0].key}`;
    } else {
        // If no trailers are available, hide the iframe and show the "not found" message
        iframe.classList.add('d-none');
        movieNotFound.classList.remove('d-none');
    }

}

// Function to handle the selection of a movie and display its trailer
const handleMovieSelection = element => {
    // Get the movie ID from the data-id attribute of the clicked element
    const id = element.target.getAttribute('data-id');

    // Fetch the movie trailer data for the selected movie ID
    getMovieTrailer(id).then(data => {
        // Extract the results array from the fetched data
        const results = data.results;

        // Filter out YouTube trailers from the results
        const youtubeTrailers = results.filter(result => {
            // Check if the video site is 'YouTube' and the type is 'Trailer'
            if (result.site == 'YouTube' && result.type == 'Trailer') {
                return true;
            } else {
                return false;
            }
        });

        // Call the setTrailer function to display the trailer(s) in the modal
        setTrailer(youtubeTrailers);
    });

    // Show the trailer modal using jQuery
    $('#trailerModal').modal('show');
}

// Function to reset the modal by clearing the source of the iframe
function resetModal() {
    // Get the iframe element by its ID
    const iframe = document.getElementById('movieTrailer');

    // Clear the source (src) of the iframe to stop video playback
    iframe.src = '';
}
