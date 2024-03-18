// WatchedSummary.jsx
import React from 'react';
import { average } from '../../utilities'; // Assuming you have a utility file

export default function WatchedSummary({ watched }) {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));
  
    return (
      <div className="text-white mt-8">
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            you gave an average of  
            <span>🌟 </span>
            <span>{avgUserRating.toFixed(2)}</span> 
             rating
          </p>
         
        </div>
      </div>
    );
  }
