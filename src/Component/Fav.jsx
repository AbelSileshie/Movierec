import React from 'react'
import Header from './Header';

const Fav = ({favorite,handleItemRemove,favoriteTV,TVItemRemove}) => {
    const handleRemoveClick = (title) => {
        handleItemRemove(title);
      };
    const TvRemove=(name)=>{

        TVItemRemove(name);
    }
  return (
    <div>
    <Header/>  
        Fav
        {favorite.map((movie,index)=>(
            <div key={index}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <button onClick={() => handleRemoveClick(movie.title)}>Remove</button>
            </div>
        ))}
        {favoriteTV.map((movie,index)=>(
            <div key={index}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <button onClick={() => TvRemove(movie.name)}>Remove</button>
            </div>
        ))}
    </div>

  )
}

export default Fav