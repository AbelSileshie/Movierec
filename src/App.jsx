import './App.css';
import { useState } from 'react';

import React from 'react'
import {  Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './Component/Header';

import Footer from './Component/Footer';

import Login from './Component/Login'

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