import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="grid grid-cols-0 sm:grid-cols-2 md:grid-cols-6 place-items-center mt-20 ml-2 mr-">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </div>
  );
}
