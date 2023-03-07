import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY, http } from '../api'

function SingleGame() {
    const {category,name} = useParams()
    const ApiKey = useContext(APIKEY)
    const [game,setGame] = useState({})
    const gameInfo = useRef()
    console.log(gameInfo);
    
    console.log(game);
    async function getGameInfo() {
        await http.get(`/games/${name}?key=${ApiKey}`)
        .then(res=> {
          setGame(res.data)
        })
        .catch(err=> {
          console.log(err);
        })
    }
    function gameDesc () {
      gameInfo.innerHTML = Object.keys(game).length> 0 ? game.description : ''
    }
    gameDesc()
    useEffect(()=> {
      getGameInfo()
    },[])
  return (
    <div className="container">
            <div className='single_game'>
        <div className='single_game_img'>
           <img src={game.background_image}/>
        </div>
        <div className='single_game_info' ref={gameInfo}>
            
        </div>
    </div>
    </div>
  )
}

export default SingleGame