import React, { useContext, useEffect, useState } from 'react'
import { APIKEY } from '../api'
import { http } from '../api'
import Card from '../components/Card'
import Skleton from '../components/Skleton'
function Home() {
    const [games,setGames] = useState([])
    const [skleton,setSkleton] = useState(true)
    const ApiKey = useContext(APIKEY)
    console.log(games);

    async function getGames() {
        await http.get(`/games?key=${ApiKey}&page_size=10`)
        .then(res=> {
            setGames(res.data.results)
            setSkleton(false)
        })
        .catch(err=> {
            console.log(err);
        })
    }
    useEffect(()=> {
        getGames()
    },[])
  return (
        <div className='cards'>
            <div className='cards_title'>
                All Games
            </div>
            {
                skleton? <Skleton/> : (
                    <div className='cards_list'>
                {
                    games.length>0 ?
                    (
                        games.map(item=> {
                            return <Card item={item} key={item.id} category='home'/>
                        })
                    )
                     : ''
                }
            </div>
                )
            }
        </div>
  )
}

export default Home