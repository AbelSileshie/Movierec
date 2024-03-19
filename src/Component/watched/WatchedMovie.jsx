// WatchedMovie.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trash } from "phosphor-react";
import React from "react";

export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        className="w-full h-auto"
        src={movie.poster}
        alt={`${movie.title} poster`}
      /><button
      className="relative  bottom-0 right-0 p-2 scale-110 text-black"
      onClick={() => onDeleteWatched(movie.imdbID)}
    >
      <Trash />
    </button>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
          <p>
            <p className="text-sm text-black-600">
              Imdb<span>⭐️</span>
              {movie.imdbRating}
            </p>
          </p>
          <p>
            <p className="text-sm text-black-600">
              My Rating <span>🌟</span>
              {movie.userRating}
            </p>
          </p>
          <p>
            <span>⏳</span>
            <p className="text-sm text-black-600">{movie.runtime} min</p>
          </p>

      </div>
          
    </div>
  );
}
