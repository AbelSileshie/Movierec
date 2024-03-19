import { useState } from "react";

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./Component/Header";
import "./App.css";
import Footer from "./Component/Footer";
import Login from "./Component/Login";

import Fav from "./Component/Fav";
import HomePage from "./Component/HomePage";
import Popular from "./Component/Popular";
import Action from "./Component/genere/Action";
import Comedy from "./Component/genere/Comedy";
import Horror from "./Component/genere/Horror";
import Romance from "./Component/genere/Romance";
import Thriller from "./Component/genere/Thriller";
import Adventure from "./Component/genere/Adventure";
import Drama from "./Component/genere/Drama";
import Family from "./Component/genere/Family";
import Sci_Fi from "./Component/genere/Sci_Fi";
import Home from "./pages/Home";
import Watched from "./pages/Watched";
const App = () => {
  const [favorite, setFavorite] = useState([]);
  const [query, setQuery] = useState("");

  const [favoriteTV, setFavoriteTV] = useState([]);
  const [watchedList, setWatchedList] = useState(false);
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue) || [];
  });
  const ItemClick = (RESULT) => {
    if (!favorite.some((item) => item.title === RESULT.title)) {
      const updateItem = [...favorite, RESULT];
      setFavorite(updateItem);
    }
  };
  const TVClick = (RESULT) => {
    if (!favoriteTV.some((item) => item.name === RESULT.name)) {
      const updateItem = [...favoriteTV, RESULT];
      setFavoriteTV(updateItem);
    }
  };
  const handleItemRemove = (titleToRemove) => {
    const updatedFavorite = favorite.filter(
      (item) => item.title !== titleToRemove
    );
    setFavorite(updatedFavorite);
  };
  const TVItemRemove = (nameToRemove) => {
    const updatedFavorite = favoriteTV.filter(
      (item) => item.name !== nameToRemove
    );
    setFavoriteTV(updatedFavorite);
  };


  return (
    <>
      <main>
        <Header setWatchedList={setWatchedList} />
      </main>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              watchedList={watchedList}
              watched={watched}
              setWatched={setWatched}
              query={query} 
              setQuery={setQuery} 
            />
          }
        />
        <Route path="Popular" element={<Popular />} />
      <Route path="watched" element={<Watched watched={watched} setWatched={setWatched} />} />
        <Route path="Login" element={<Login />} />
        <Route
          path="Fav"
          element={
            <Fav
              favorite={favorite}
              handleItemRemove={handleItemRemove}
              favoriteTV={favoriteTV}
              TVItemRemove={TVItemRemove}
            />
          }
        />
        <Route path="Action" element={<Action />} />
        <Route path="Comedy" element={<Comedy />} />
        <Route path="Horror" element={<Horror />} />
        <Route path="Romance" element={<Romance />} />
        <Route path="Thriller" element={<Thriller />} />
        <Route path="Adventure" element={<Adventure />} />
        <Route path="Drama" element={<Drama />} />
        <Route path="Family" element={<Family />} />
        <Route path="Sci_Fi" element={<Sci_Fi />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
