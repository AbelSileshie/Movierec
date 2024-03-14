import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const HomePage = ({ItemClick,TVClick}) => {
    const [movieList, setMovieList] = useState([]);
    const [tv, setTv] = useState([]);
  
    
    const [search, setSearch] = useState('');
  
   
  
    useEffect(() => {
      getMovie();
      getTV();
    }, []);
  
    const getMovie = () => {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=dc124408feff77c1c705d200d7c73c04")
        .then(res => res.json())
        .then(json => setMovieList(json.results));
    }
    
    const getTV = () => {
      fetch("https://api.themoviedb.org/3/discover/tv?api_key=dc124408feff77c1c705d200d7c73c04")
        .then(res => res.json())
        .then(json => setTv(json.results));
    }
    const filteredStories = movieList.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    const filteredStoriesTV=tv.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
<div>
<div>
      <input type="text" 
             placeholder='search...'
             value={search} 
             onChange={(e)=>{setSearch(e.target.value)}}/>
</div>
      

     {filteredStories.map((movie, index) => (
    <div  key={index} style={{display:"inline-block"}}>
      <img style={{ width: "300px", height: "250px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie ${index}`} />
      <button onClick={() => ItemClick(movie)}>love</button>
     
    </div>
    
  ))}
    

      {filteredStoriesTV.map((show, index) => (
        <div key={index} style={{ display: "inline-block" }}>
          <img style={{ width: "300px", height: "250px" }} src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={`Movie ${index}`} />
          <button onClick={() => TVClick(show)}>love</button>
        </div>
      ))}



    </div>
  );
}

export default HomePage