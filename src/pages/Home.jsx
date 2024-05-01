import React, { useEffect, useState } from "react";
import MovieCard from "../Component/MovieCard";

const key = "cd03c49615cd326a66da1a5a7b3cc69e";

import { average } from "../utilities";

import Main from "../Component/common/Main";
import Box from "../Component/common/Box";
import MovieList from "../Component/movies/MovieList";
import MovieDetails from "../Component/movies/MovieDetails";
import Loader from "../Component/common/Loader";
import ErrorMessage from "../Component/common/ErrorMessage";
import WatchedSummary from "../Component/watched/WatchedSummary";
import WatchedMoviesList from "../Component/watched/WatchedMoviesList";
import Header from "../Component/Header";
import { Button, Carousel } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
const KEY = "c39fabd7";

export default function Home({ watchedList, watched, setWatched }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [topRated, setTopRated] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [Herocard, setHerocard] = useState([]);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  // <Box>
  //         {selectedId ? (
  //
  //         ) : (
  //           <>
  //           </>
  //         )}
  //       </Box>
  const [isHovered, setIshovered] = useState(false);

  const handlehover = () => {
    setIshovered(!isHovered);
  };
  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  useEffect(() => {
    async function getTopRatedMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
      );
      const data = await res.json();
      setTopRated(data.results);
    }

    async function getPopularTVShows() {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`
      );
      const data = await res.json();
      setTVShows(data.results);
    }
    async function getHerocard() {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${key}`
      );
      const data = await res.json();
      setHerocard(data.results);
    }

    getTopRatedMovies();
    getPopularTVShows();
    getHerocard();
  }, []);

  if (selectedId) {
    return (
      <MovieDetails
        selectedId={selectedId}
        onCloseMovie={handleCloseMovie}
        onAddWatched={handleAddWatched}
        watched={watched}
      />
    );
  } else {
    return (
      <>
        <Header query={query} setQuery={setQuery} />
        <Main>
          <>
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
            )}
            {error && <ErrorMessage message={error} />}
          </>
          <Carousel className="rounded-xl">
            {Herocard.map((movie) => (
              <>
                <div
                  className="relative rounded-xl overflow-hidden"
                  key={movie.id}
                  style={{
                    aspectRatio: "auto",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="relative w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 grid h-full w-full bottom-0 sm:pla56ce-items-center"
                    onMouseEnter={handlehover}
                    onMouseLeave={handlehover}
                    style={{
                      backgroundColor: isHovered ? "rgba(0,0,0,0.5)" : "",
                    }}
                  >
                    {isHovered ? (
                      <>
                        <div className="w-3/4 text-center md:w-2/4 absolute bottom-28 md:bottom-20  left-16">
                          <Typography
                            variant="h1"
                            color="white"
                            className="text-3xl md:text-4xl lg:text-5xl text-left bg-opacity-50"
                          >
                            <p>
                              {movie.title}
                              (IMDB
                              {movie.vote_average.toFixed(1)})
                            </p>
                          </Typography>
                          <Typography
                            variant="lead"
                            color="white"
                            className="mb-5 opacity-80 text-justify"
                          >
                            {movie.overview}
                          </Typography>
                          <div className="absolute grid-cols-2">
                            <Button
                              size="lg"
                              color="black"
                              className=" bg-transparent"
                            >
                              <PlayCircleIcon
                                size="sm"
                                color="white"
                                className=" h-10"
                              />
                            </Button>
                            <Button
                              size="lg"
                              color="white"
                              variant="text"
                              onClick={() => handleSelect(movie.id)}
                            >
                              More Details
                            </Button>
                            <div className="absolute mt-0 left-0 grid-cols-2">
                              {/* {data.movie.geners.map((movie) => (
                            <></>
                          ))} */}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
            ))}
          </Carousel>
        </Main>

        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Top Rated Movies
          </h2>{" "}
          <div className="grid grid-cols-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 place-items-center gap-10 mt-20 ml-20 mr-20 ">
            {topRated.map((movie) => (
              <MovieCard
                key={movie.id}
                selectedId={selectedId}
                onSelectMovie={handleSelectMovie}
                movie={movie}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Popular TV Shows
          </h2>{" "}
          <div className="grid grid-cols-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 place-items-center gap-10 mt-20 ml-20 mr-20 ">
            {tvShows.map((movie) => (
              <MovieCard
                key={movie.id}
                selectedId={selectedId}
                onSelectMovie={handleSelectMovie}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
