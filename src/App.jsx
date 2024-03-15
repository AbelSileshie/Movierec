import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./Component/Header";
import "./App.css";
import Hero from "./Component/Hero";
import Home from "./pages/Home";
import { MovieDetail } from "./Component/MovieDetail";

const App = () => {
  return (
    <><Header/>
      <Home />
      <Hero />
      <MovieDetail/>
    </>
  );
};

export default App;




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
