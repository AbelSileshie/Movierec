// MovieDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function MovieDetailsPage({
  selectedId={selectedId},
  onCloseMovie = { onCloseMovie },
  onAddWatched = { onAddWatched },
  watched = { watched },
}) {

  return (
    <div>
      <MovieDetails
        selectedId={selectedId}
        onCloseMovie={onCloseMovie}
        onAddWatched={onAddWatched}
        watched={watched}
      />
    </div>
  );
}

export default MovieDetailsPage;
