import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <div >
          <h2 className="text-3xl font-semibold mt-2 mb text-white ml-20 mt-6">
            Search Results
          </h2>{" "}
    <div className="grid grid-cols-0 sm:grid-cols-2 md:grid-cols-6 place-items-center mt-16 ml-2 mr-">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
        ))}
    </div>
        </div>
  );
}
