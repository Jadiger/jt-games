import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Genres from '../pages/Genres'
import Home from '../pages/Home'
import NewGames from '../pages/NewGames'
import Platforms from '../pages/Platforms'
import Popular from '../pages/Popular'
import Header from './Header'
import SingleGame from './SingleGame'
function Routing() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/new-games' element={<NewGames/>}/>
            <Route path='/platforms' element={<Platforms/>}/>
            <Route path='/genres' element={<Genres/>}/>
            <Route path='/:category/:name' element={<SingleGame/>}/>
        </Routes>
    </BrowserRouter>

  )
}

export default Routing