import React from 'react';

function MovieCard({ movie,onSelectMovie }) {
  return (
    <div  onClick={() => onSelectMovie(movie.id)} className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        {movie.release_date ? (
          <p className="text-sm text-gray-600">
            Release Date: {movie.release_date}
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            First Air Date: {movie.first_air_date}
          </p>
        )}
        <p className="text-sm text-gray-600">Rating: {(movie.vote_average).toFixed(1)}⭐</p>
      </div>
    </div>
  );
}

export default MovieCard;
