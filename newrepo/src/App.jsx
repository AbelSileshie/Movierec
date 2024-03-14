import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import Login from './Component/Login';
import Navigation from './Component/Navigation';
import SingUp from './Component/SingUp';
import Fav from './Component/Fav';

const App = () => {
  const [favorite, setFavorite] = useState([]);
  const [favoriteTV,setFavoriteTV]= useState([])
  const ItemClick = (RESULT) => {
    if(!favorite.some((item)=>item.title === RESULT.title)){
    const updateItem = [...favorite, RESULT];
    setFavorite(updateItem);
  };
}
const TVClick= (RESULT) => {
  if(!favoriteTV.some((item)=>item.name === RESULT.name)){
  const updateItem = [...favoriteTV, RESULT];
  setFavoriteTV(updateItem);
};
}
  const handleItemRemove = (titleToRemove) => {
    const updatedFavorite = favorite.filter((item) => item.title !== titleToRemove);
    setFavorite(updatedFavorite);
  };
const TVItemRemove=(nameToRemove)=>{
  const updatedFavorite = favoriteTV.filter((item)=>
  item.name !==nameToRemove)
  setFavoriteTV(updatedFavorite)
}
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage ItemClick={ItemClick} TVClick={TVClick}/>} />
        <Route path='Login' element={<Login />} />
        <Route path='SingUp' element={<SingUp />} />
        <Route path='Fav' element={<Fav favorite={favorite} 
                                    handleItemRemove={handleItemRemove} 
                                    favoriteTV={favoriteTV}  
                                    TVItemRemove={TVItemRemove}/>} />
      </Routes>
    </div>
  );
};

export default App;




 


  

 
  // {movieList.map((movie, index) => (
  //   <div  key={index} style={{display:"inline-block"}}>
  //     <img style={{ width: "300px", height: "250px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie ${index}`} />
     
  //    <p>{movie.title}</p> 
  //    <p>{movie.release_date}</p>
  //   </div>
    
  // ))}

  





  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const result = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=dc124408feff77c1c705d200d7c73c04");
  //       const data = await result.json();
  //       setPosts(data.results); // Update with the results, not the entire response
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // Handle error here, e.g., set an error state
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // {isLoading && <p>Loading...</p>}



















// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const result = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=dc124408feff77c1c705d200d7c73c04");
//         const data = await result.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredStories = posts.results && posts.results.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Data Fetching in React</h1>
//       <input
//         type="text"
//         placeholder="search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {isLoading && <p>Loading...</p>}
//       {filteredStories && filteredStories.map((item, index) => (
//         <div key={index}>{item.name}</div>
//       ))}
//     </div>
//   );
// };

// export default App;























// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [data, setData] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const json = await response.json();//i don't understood the functionality but important always copy and post it in our code
//         setData(json);
//         setLoading(true)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>

//       <h1>Data fetched:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>

//     </div>
//   );
// }

// export default MyComponent;





















































// import React from 'react'
// import { useState } from 'react'
// import Ex from './Ex'
// const App = () => {
//   const [count,setCount]=useState(0)

// const add =()=>{
//   setCount(count+1)
// }

//   const [search,setSearch]=useState(
//     localStorage.getItem('search') || ""
//     )

//     React.useEffect(() => {
//       localStorage.setItem('search', search);
//       }, [search])
  


//       const handleSearch = event => {
//         setSearch(event.target.value);
       
//         };

//   const stories = [
//     {
//       title: "Introduction to Ethical Hacking",
//     },
//       {title: "John Doe",},
    

//     {
//       title: "Security Vulnerabilities in IoT Devices",}
//       ,{title: "Jane Smith"},
      
//     ]
// const filteredStories=stories.filter((event)=>{
// return event.title.toLowerCase().includes(search.toLowerCase())})

//   return (
       
//     <div>
//       <input type="text" 
//       placeholder='search...'
//       value={search}
//       onChange={handleSearch}
//        />

//        {filteredStories.map((item,index)=>(
//         <div key={index}>
//           {item.title}
//         </div>
//        ))}

//        <button onClick={add}> Describe </button>
//        <div>{count === 1 ? <Ex /> : <h1></h1>}</div>
//     </div>
//   )
// }

// export default App












// import React from 'react'
// import { useState } from 'react'

// import HOMEpage from './HOMEpage'
// import Mess from './Mess'
// import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
// const App = () => {


//   const [info,setInfo]=useState([])
  
// const click= (event)=>{
// event.preventDefault();
// const updatedInfo=[...info,item]
// setInfo(updatedInfo)
// }


//   return (
//     <div>
//       <div>

//       <BrowserRouter>
//       <header>
//         <nav>
//       <NavLink to='/'>Mess</NavLink>
//       <NavLink to='HOMEpage'>HOMEpage</NavLink>
//       </nav>
//       </header>
//       <main>
//       <Routes>
//         <Route path='/' element={<Mess click={click}/>}/>
//         <Route path='HOMEpage' element={<HOMEpage info={info}/>}/>
//       </Routes>
//       </main>
//       </BrowserRouter>

//       </div>
    
    
//     </div>
//   )
// }

// export default App























