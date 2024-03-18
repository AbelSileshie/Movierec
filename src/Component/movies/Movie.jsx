import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function Movie({ movie, onSelectMovie }) {
  console.log("msaj",movie);

  return (
    <div
      onClick={() => onSelectMovie(movie.imdbID)}
      className="text-white shadow-md rounded-lg overflow-hidden relative group mb-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
    >
      <div
        key={movie.imdbID}
        className="text-white shadow-md rounded-lg overflow-hidden relative group "
      >
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          className="w-full max-w-[300px] h-[300px] rounded-lg justify-end"
        />
          
        {/* overlay section */}
        <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
          <div className="space-y-3">
            <Slide cascade>
              <h1 className=" text-xl font-bold">{movie.Title}</h1>
              <Fade cascade damping={0.02}>
                <p>{movie.Year}</p>
              </Fade>
              <div className="">
                <button className="btn mt-auto rounded-lg hover:bg-black/20 duration-300">
                  <PlayCircleIcon className=" size-5 object-center" />
                </button>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
