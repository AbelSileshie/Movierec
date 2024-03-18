import React, { useState, useEffect, useRef } from "react";
import Loader from "../common/Loader";
import StarRating from "./StarRating";
import "../../App.css"
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

            <button className="ml-44 mt-20 px-3 py-2 rounded-2xl bg-blue-900 shadow-2xl hover:bg-blue-500 mb-5" onClick={onCloseMovie}>
              &larr;
            </button>
            <div className="grid grid-cols-3 ml-44 mr-44 my-15 gap-10">
            <div className="">
            
            <img  className=" rounded-lg select-none " src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              {console.log("tit", title)} 
              <h2 className="pl-2 py-3">{title || title2}</h2>
              <p className="pl-2 pb-2">
                {released} &bull; {runtime}
              </p>
              <p className="pl-2 pb-1">{genre}</p>
              <p className="pl-1">
                <span>⭐️</span>
                {imdbRating} IMDb rating 
              </p>
            </div>
            </div>
         
          <div className="  col-span-2">
            <div className="rating mb-4">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" onClick={handleAdd}>
                      + Add to watchlist
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p className=" text-base  font-med mb-3">
             {plot}
            </p>
            <p className="mb-2">Starring {actors}</p>
            <p className="">Directed by {director}</p>
            </div>
         
          </div>
        </>
      )}
    </div>
  );
}
