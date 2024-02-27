import { Route, Routes } from 'react-router-dom';

import React, { useState } from "react";
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';


function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<NavBar/>}/>
      <Route exact path='/signin' element={<SignIn/>}/>
    </Routes>
    </>
  );
};

export default App;
