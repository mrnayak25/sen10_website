import { Route, Routes } from "react-router-dom";
import News from "./components/News";
import Games from "./components/Games";
import Esports from "./components/Esports";
import About from "./components/About";
import Library from "./components/Library";
import Home from "./components/Home";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<NavBar />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/games" element={<Games />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/esports" element={<Esports />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/library" element={<Library />} />
        </Route>
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
