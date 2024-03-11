import React from 'react'
import {  Routes, Route, NavLink } from 'react-router-dom';
import Test from './Component/Test'
import HomePage from './Component/HomePage';
const App = () => {
  return (
    <div>
   
      {/** if you implement BrowserRouter in main.jsx, it is not require to implement in this page.
       * if not yor code looks like this:-
       * 
       * import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom';
       * 
       * 
       * <BrowserRouter>
       *  <NavLink to='/' > Home Page</NavLink>
<NavLink to='Test' ><p>Test</p></NavLink>


      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='Test' element={ <Test/>}/>

      </Routes>
       * <BrowserRouter/>
       *
        */}
    
        <NavLink to='/' > Home Page</NavLink>
<NavLink to='Test' ><p>Test</p></NavLink>


      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='Test' element={ <Test/>}/>

      </Routes>
   
      

    </div>
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























