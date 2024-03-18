import React from 'react';
import WatchedMovie from './WatchedMovie';

export default function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (

<div className="container mx-auto px-4 py-8">
<h2 className="text-3xl font-semibold mb-4 text-white">
  WatchedList
</h2>{" "}
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
{watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
</div>
</div>
  );
}