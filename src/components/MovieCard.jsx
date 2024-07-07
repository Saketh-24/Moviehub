import React, { useState } from 'react'

function MovieCard({movies}) {

    const [expandedMovieId, setExpandedMovieId] = useState(null);

    const toggleDescription = (movieId) => {
        setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
      };

  return (
    <div className="movie-wrapper">
    {movies.map((movie) => (
      <div key={movie.id} className="movie">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p className='rating'>Rating: {movie.vote_average}</p>
        {expandedMovieId === movie.id ? (
          <p>{movie.overview}</p>
        ) : (
          <p>{movie.overview.substring(0, 150)}...</p>
        )}
        <button onClick={() => toggleDescription(movie.id)} className='read-more'>
          {expandedMovieId === movie.id ? 'Show Less' : 'Read More'}
        </button>
      </div>
    ))}
  </div>
  )
}

export default MovieCard
