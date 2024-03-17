import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Horror = () => {
  const [movieList, setMovieList] = useState([]);
 
  useEffect(() => {
    getMovies();
   
}, []);


const getMovies = () => {
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=cd03c49615cd326a66da1a5a7b3cc69e&language=en-US&sort_by=release_date.desc&page=1&with_genres=27")
    .then(res => res.json())
    .then(json => {
      setMovieList(json.results)
    
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
      
    });
}
  return (
    <div style={{ marginTop: '500px' }}>
    
    {
      movieList.map((movie,index) => (
        movie.poster_path && (
          <div key={index} style={{ display: "inline-block" }}>
            <div style={{margin:'30px'}}> <img style={{ width: "300px", height: "250px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie ${index}`} />
           </div>
           
             </div>
        )
      )
    )}
  </div>
  ) 
}

export default Horror