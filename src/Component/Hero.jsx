import { PlayCircleIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Carousel,
  IconButton,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const APIKey = import.meta.env.VITE_API_KEY;
  const APIURL = import.meta.env.VITE_API_URL;
  const APIToken = import.meta.env.VITE_API_TOKEN;
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleSelect = (movieid) => {
    navigate("/Movie", { state: { movieid } });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${APIURL}trending/all/day?language=en-US&api_key=${APIKey}`,
          {
            headers: {
              Authorization: `Bearer ${APIToken}`,
            },
          }
        );
        setData(response.data.results);
        console.log(response.data.results);
        // console.log(data[0].title);
      } catch {
        setError(true);
        console.log("Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const [isHovered, setIshovered] = useState(false);

  const handlehover = () => {
    setIshovered(!isHovered);
  };

  if (loading)
    return (
      <div className="absolute inset-0 grid h-full w-full sm:place-items-center">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  if (error) return <div>Error Occured</div>;
  return (
    <>
      <Carousel className="rounded-xl">
        {data.map((movie) => (
          <>
            <div
              className="relative rounded-xl overflow-hidden"
              key={movie.id}
              style={{ aspectRatio: "auto", height: "100vh", width: "100vw" }}
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
                style={{ backgroundColor: isHovered ? "rgba(0,0,0,0.5)" : "" }}
              >
                {isHovered ? (
                  <>
                    <div className="w-3/4 text-center md:w-2/4 absolute bottom-28 md:bottom-20  left-16">
                      <Typography
                        variant="h1"
                        color="white"
                        className="text-3xl md:text-4xl lg:text-5xl text-left bg-opacity-50"
                      >
                        {movie.title}
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
    </>
  );
}
export default Hero;
