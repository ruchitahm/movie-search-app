import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = '6afd3a9a'; // Make sure this is correct

  // Fetch movies based on query
  const fetchMovies = async (query = 'popular') => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Fetch movie details based on imdbID
  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  // Fetch default movies on page load
  useEffect(() => {
    fetchMovies();
  }, []);

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue) fetchMovies(searchValue);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchSubmit={handleSearchSubmit}
      />
      <div className="movies-container">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onSelect={() => fetchMovieDetails(movie.imdbID)}
            />
          ))
        ) : (
          <p>No movies found. Try a different search!</p>
        )}
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;
