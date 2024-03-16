import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import { HeartIcon } from "@heroicons/react/20/solid";
import CircularProgress from "./CircularProgress";

const HomePage = ({ ItemClick, TVClick }) => {
  const [movieList, setMovieList] = useState([]);
  const [tv, setTv] = useState([]);
  const [search, setSearch] = useState("");
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    getMovie();
    getTV();
  }, []);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=dc124408feff77c1c705d200d7c73c04"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  const getTV = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=dc124408feff77c1c705d200d7c73c04"
    )
      .then((res) => res.json())
      .then((json) => setTv(json.results));
  };

  const isLiked = (itemId) => likedItems.includes(itemId);

  const handleLike = (itemId) => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter((id) => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };

  const filteredStories = movieList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredStoriesTV = tv.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log("helo");
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Hero move={movieList} />
      <br />

      <div className="grid grid-cols-4 gap-4 mt-8 ">
        {filteredStories.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out border-7 shadow-emerald-950 border rounded-lg relative"
          >
            <img
              className="w-72 h-60"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Movie ${index}`}
            />
            <button onClick={() => ItemClick(movie)}>
              <div>
                <HeartIcon
                  className={`w-6 h-6 justify-start mr-10 ${
                    isLiked(movie.id) ? "text-red-500" : "text-gray-500"
                  } hover:text-red-400 active:text-red-500`}
                  onClick={() => handleLike(movie.id)}
                />
              </div>
            </button>
            <div className="absolute top-12 left-2">
              <CircularProgress
                progress={movie.vote_average * 10}
                size={40}
                strokeWidth={5}
                rating={movie.vote_average}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 ">
        {filteredStoriesTV.map((show, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out border-7 shadow-emerald-950 border rounded-lg relative"
          >
            <img
              className="w-72 h-60"
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={`TV Show ${index}`}
            />
            <button onClick={() => TVClick(show)}>
              <div>
                <HeartIcon
                  className={`w-6 h-6 justify-start mr-10 ${
                    isLiked(show.id) ? "text-red-500" : "text-gray-500"
                  } hover:text-red-400 active:text-red-500`}
                  onClick={() => handleLike(show.id)}
                />
              </div>
            </button>
            <div className="absolute top-12 left-2">
              <CircularProgress
                progress={show.vote_average * 10}
                size={40}
                strokeWidth={5}
                rating={show.vote_average}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
