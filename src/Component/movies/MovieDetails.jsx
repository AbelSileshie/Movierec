import React, { useState, useEffect, useRef } from "react";
import Loader from "../common/Loader";
import StarRating from "./StarRating";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
const KEY = "c39fabd7";
const key = "cd03c49615cd326a66da1a5a7b3cc69e";

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const [isHovered, setIsHovered] = React.useState(false);

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
  let title2,
    title,
    year,
    poster,
    runtime,
    imdbRating,
    plot,
    released,
    actors,
    director,
    genre;

  if (typeof selectedId === "string" && selectedId.startsWith("tt")) {
    const {
      Title,
      Year,
      Poster,
      Runtime,
      imdbRating: rating,
      Plot,
      Released,
      Actors,
      Director,
      Genre,
    } = movie;

    title = Title;
    year = Year;
    poster = Poster;
    runtime = Runtime;
    imdbRating = rating;
    plot = Plot;
    released = Released;
    actors = Actors;
    director = Director;
    genre = Genre;
  } else if (typeof selectedId === "number") {
    const { title, overview, release_date, vote_average, poster_path } = movie;
    title2 = title;
    plot = overview;
    released = release_date;
    imdbRating = vote_average;
    poster = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  } else {
  }
  // function handleAdd() {
  //   const newWatchedMovie = {
  //     imdbID: selectedId,
  //     title,
  //     year,
  //     poster,
  //     imdbRating: Number(imdbRating),
  //     runtime: Number(runtime.split(" ").at(0)),
  //     userRating,
  //     countRatingDecisions: countRef.current,
  //   };

  //   onAddWatched(newWatchedMovie);
  //   onCloseMovie();
  // }
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId, // Assuming TMDB IDs are used for watched list
      title: title ? title : title,
      year: year ? year : movie.release_date,
      poster: poster
        ? poster
        : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
      imdbRating: imdbRating ? Number(imdbRating) : Number(movie.vote_average),
      runtime: runtime ? Number(runtime.split(" ").at(0)) : " ",
      userRating: userRating ? userRating : vote_average,
      countRatingDecisions: countRef.current,
    };
    console.log("title", title);
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
        if (typeof selectedId === "string" && selectedId.startsWith("tt")) {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
          );
          const data = await res.json();
          setMovie(data);
        } else if (typeof selectedId === "number") {
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
          {" "}

          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              {console.log("tit", title)}
              <h2>{title || title2}</h2>
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
