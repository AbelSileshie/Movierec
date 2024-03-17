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
const KEY = "c39fabd7";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [topRated, setTopRated] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue) || [];
  });
  console.log("MOVVVVV", movies);

  console.log("id", selectedId);
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

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
            console.log(err.message);
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
      console.log("rated", data.results);
    }

    async function getPopularTVShows() {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`
      );
      const data = await res.json();
      setTVShows(data.results);
      console.log("popular", data.results);
    }

    getTopRatedMovies();
    getPopularTVShows();
  }, []);

  return (
    <div>
      <Header query={query} setQuery={setQuery} />

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Top Rated Movies
        </h2>{" "}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
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
    </div>
  );
}
