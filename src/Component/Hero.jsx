import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Ensure you have a CSS file for styling
import CircularProgress from "./CircularProgress";

const Hero = ({ move }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % move.length);
    }, 5000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, move.length]);

  return (
    <div className="carousel">
      {move.map((movie, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <img
            width={1600}
            height={1600}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Movie ${index}`}
          />
          <div className="absolute bottom-10 left-2">
            <h1 className="text-white text-2xl text">
              {movie.title} ({movie.release_date.substring(0, 4)})
            </h1>
          </div>
          <div className="absolute top-12 left-2">
            <CircularProgress
              progress={movie.vote_average * 10}
              size={60}
              strokeWidth={5}
              rating={movie.vote_average}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
