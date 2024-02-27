import React from 'react'
import SliderComp from './SliderComp'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import News from './News'
import Games from './Games'
import Esports from './Esports'
import About from './About'
import Library from './Library'

function MainContainer() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
        <Route exact path='/games' element={<Games/>}/>
        <Route exact path='/news' element={<News/>}/>
        <Route exact path='/esports'element={<Esports/>}/>
        <Route exact path='/about'element={<About/>}/>
        <Route exact path='/library'element={<Library/>}/>
        </Routes>
    </div>
  )
}

export default MainContainer
