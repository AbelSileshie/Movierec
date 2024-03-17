import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Horror = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=cd03c49615cd326a66da1a5a7b3cc69e&language=en-US&sort_by=release_date.desc&page=1&with_genres=27"
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };
  return (
    <div style={{ marginTop: "50px" }}>
      {loading ? (
        <p
          style={{
            marginTop: "80px",
            marginLeft: "800px",
            fontSize: "80px",
            color: "red",
          }}
        >
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 place-items-center m-1 p-2">
          {movieList.map(
            (movie, index) =>
              movie.poster_path && (
                <div
                  key={index}
                  className="text-white shadow-md rounded-lg overflow-hidden relative group"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="w-full max-w-[300px] h-[300px] rounded-lg"
                  />
                  <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                    <div className="space-y-3">
                      <Slide cascade>
                        <h1 className="text-xl font-bold">{movie.title}</h1>
                        <Fade cascade damping={0.02}></Fade>
                        <div className="">
                          <button className="btn mt-auto rounded-lg hover:bg-black/20 duration-300"></button>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Horror;
