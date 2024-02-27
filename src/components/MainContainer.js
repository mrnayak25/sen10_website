import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

function MainContainer() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default MainContainer
