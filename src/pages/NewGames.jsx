import React, { useContext, useEffect, useState } from 'react'
import { http } from '../api'
import { APIKEY } from '../api'
import Card from '../components/Card'
import Skleton from '../components/Skleton'
function NewGames() {
    const ApiKey = useContext(APIKEY)
    const [newGames,setNewGames] = useState([])
    const [skleton,setSkleton] = useState(true)
    console.log(newGames);
    async function getSearch() {
        await http.get(`/games?key=${ApiKey}&ordering=-updated`)
        .then(res=> {
            setNewGames(res.data.results)
            setSkleton(false)
        })
        .catch(err=> {
            console.log(err);
        })
    }
    useEffect(()=> {
        getSearch()
    },[])
  return (
    <div className='cards'>
            <div className='cards_title'>
                New Updated Games
            </div>
            {
                skleton? <Skleton/> : (
                    <div className='cards_list'>
                {
                    newGames.length>0 ?
                    (
                        newGames.map(item=> {
                            return <Card item={item} key={item.id} category='new-games'/>
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

export default NewGames