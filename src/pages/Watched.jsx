import React from "react";
import WatchedSummary from "../Component/watched/WatchedSummary";
import WatchedMoviesList from "../Component/watched/WatchedMoviesList";

function Watched( { watched, handleDeleteWatched}) {
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  return (
    <div>
      <WatchedSummary watched={watched} />
      <WatchedMoviesList
        watched={watched}
        onDeleteWatched={handleDeleteWatched}
      />
    </div>
  );
}

export default Watched;
