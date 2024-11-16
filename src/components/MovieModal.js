import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Language:</strong> {movie.Language}</p>

        {/* Close icon */}
        <span className="close-icon" onClick={onClose}>&#x2715;</span> {/* Unicode '×' for the close icon */}
      </div>
    </div>
  );
};

export default MovieModal;
