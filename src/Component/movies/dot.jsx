import React, { useState, useEffect, useRef } from "react";
import Loader from "../common/Loader";
import StarRating from "./StarRating";
const KEY = "c39fabd7";
const key = "cd03c49615cd326a66da1a5a7b3cc69e";

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState("");
    const countRef = useRef(0);
    useEffect(
      function () {
        if (userRating) countRef.current++;
      },
      [userRating]
    );

    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(
      (movie) => movie.imdbID || movie.id === selectedId
    )?.userRating;
    // const {
    //   title,
    //   overview,
    //   release_date,
    //   vote_average,
    //   poster_path
    // } = movie;
  
    // function handleAdd() {
    //   const newWatchedMovie = {
    //     imdbID: selectedId,
    //     title,
    //     year: release_date ? new Date(release_date).getFullYear() : "",
    //     poster: `https://image.tmdb.org/t/p/w300/${poster_path}`,
    //     imdbRating: Number(vote_average),
    //     runtime: "", // Fill this if available from TMDB
    //     userRating,
    //     countRatingDecisions: countRef.current,
    //   };
  
    //   onAddWatched(newWatchedMovie);
    //   onCloseMovie();
    // }
    const {
      Title: title,
      Year: year,
      Poster: poster,
      Runtime: runtime,
      imdbRating,
      Plot: plot,
      Released: released,
      Actors: actors,
      Director: director,
      Genre: genre,
    } = movie;
    const isTop = imdbRating > 8;
    console.log(isTop);

    function handleAdd() {
      const newWatchedMovie = {
        imdbID: selectedId,
        title,
        year,
        poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0)),
        userRating,
        countRatingDecisions: countRef.current,
      };

      onAddWatched(newWatchedMovie);
      onCloseMovie();
    }

    useEffect(
      function () {
        function callback(e) {
          if (e.code === "Escape") {
            onCloseMovie();
          }
        }

        document.addEventListener("keydown", callback);

        return function () {
          document.removeEventListener("keydown", callback);
        };
      },
      [onCloseMovie]
    );

    useEffect(() => {
      async function fetchMovieDetails() {
        setIsLoading(true);
        try {
          if (typeof selectedId === 'string' && selectedId.startsWith('tt')) { // Check if IMDb ID
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
            );
            const data = await res.json();
            setMovie(data);
          } else if (typeof selectedId === 'number') { // Check if TMDB ID
            const res = await fetch(
              `https://api.themoviedb.org/3/movie/${selectedId}?api_key=${key}`
            );
            const data = await res.json();
            setMovie(data);
          }
        } catch (error) {
          console.error("Error fetching movie details:", error);
        } finally {
          setIsLoading(false);
        }
      }
    
      fetchMovieDetails();
    
      return () => {
        setIsLoading(false);
      };
    }, [selectedId]);
    

    useEffect(
      function () {
        if (!title) return;
        document.title = `Movie | ${title}`;

        return function () {
          document.title = "usePopcorn";
        };
      },
      [title]
    );

    return (
      <div className="text-white">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <header>
              <button className="btn-back" onClick={onCloseMovie}>
                &larr;
              </button>
              <img src={poster} alt={`Poster of ${movie} movie`} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  <span>⭐️</span>
                  {imdbRating} IMDb rating
                </p>
              </div>
            </header>

            <section>
              <div className="rating">
                {!isWatched ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={24}
                      onSetRating={setUserRating}
                    />
                    {userRating > 0 && (
                      <button className="btn-add" onClick={handleAdd}>
                        + Add to list
                      </button>
                    )}
                  </>
                ) : (
                  <p>
                    You rated with movie {watchedUserRating} <span>⭐️</span>
                  </p>
                )}
              </div>
              <p>
                <em>{plot}</em>
              </p>
              <p>Starring {actors}</p>
              <p>Directed by {director}</p>
            </section>
          </>
        )}
      </div>
    );
  }
}
