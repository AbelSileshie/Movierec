import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./Component/Header";
import "./App.css";
import Hero from "./Component/Hero";
import Home from "./pages/Home";
import NavBar from "./Component/common/NavBar";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
    <Header/>
      <Home />
      <Hero />
    </>
  );
}

export default App;
