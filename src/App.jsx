import React from 'react'
import {  Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './Component/Header';
import './App.css';
import Footer from './Component/Footer';
import Fav from './Component/Fav';
import HomePage from './Component/HomePage';
import Popular from './Component/Popular';
import Action from './Component/genere/Action';
import Comedy from './Component/genere/Comedy';
import Horror from './Component/genere/Horror';
import Romance from './Component/genere/Romance';
import Thriller from './Component/genere/Thriller';
import Adventure from './Component/genere/Adventure';
import Drama from './Component/genere/Drama';
import Family from './Component/genere/Family';
import Sci_Fi from './Component/genere/Sci_Fi';
import Login from './Component/Login';
import Trending from './Component/Trending';
const App = () => {
    return (
        <>
            <main>
            <Navbar />
            </main>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='Popular' element={<Popular />}/>
      <Route path='Fav' element={<Fav/> } />
      <Route path='Action' element={<Action/>} />
      <Route path='Comedy' element={<Comedy/>} />
      <Route path='Horror' element={<Horror/>} />
      <Route path='Romance' element={<Romance/>} />
      <Route path='Thriller' element={<Thriller/>} />
      <Route path='Adventure' element={<Adventure/>} />
      <Route path='Drama' element={<Drama/>} />
      <Route path='Family' element={<Family/>} />
      <Route path='Sci_Fi' element={<Sci_Fi/>} />
      <Route path='Login' element={<Login/>} />
      <Route path='Trending' element={<Trending/>} />
      </Routes>     
    <Footer />
        </>
    )
}

export default App






















































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























