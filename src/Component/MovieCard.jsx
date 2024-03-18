import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function MovieCard({ movie, onSelectMovie }) {
  //   return (
  //     <div
  //       onClick={() => onSelectMovie(movie.id)}
  //       className="bg-white rounded-lg overflow-hidden shadow-md"
  //     >
  //       <img
  //         className="w-full h-auto"
  //         src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
  //         alt={movie.title}
  //       />
  //       <div className="p-4">
  //         <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
  //         {movie.release_date ? (
  //           <p className="text-sm text-gray-600">
  //             Release Date: {movie.release_date}
  //           </p>
  //         ) : (
  //           <p className="text-sm text-gray-600">
  //             First Air Date: {movie.first_air_date}
  //           </p>
  //         )}
  //         <p className="text-sm text-gray-600">
  //           Rating: {movie.vote_average.toFixed(1)}⭐
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  console.log("mmm", movie);
  return (
    <div
      onClick={() => onSelectMovie(movie.id)}
      className="text-white shadow-md rounded-lg overflow-hidden relative group mb-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  "
    >
      <div
        key={movie.id}
        className="text-white shadow-md rounded-lg overflow-hidden relative group "
      >
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-w-[300px] h-[300px] rounded-lg justify-end"
        />
        <div className="absolute right-0 bottom-0 px-2 py-2 rounded-full bg-blue-900 shadow-2xl hover:bg-blue-500 mb-2">
          <span>⭐</span>
          {movie.vote_average.toFixed(1)}
        </div>{" "}
        <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
          <div className="space-y-3">
            <Slide cascade>
              <h1 className=" text-xl font-bold">{movie.title}</h1>
              <Fade cascade damping={0.02}>
                {movie.release_date ? (
                  <p className="text-sm text-gray-600">
                    Release Date: {movie.release_date}
                  </p>
                ) : (
                  <p className="text-sm text-gray-600">
                    First Air Date: {movie.first_air_date}
                  </p>
                )}
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
