import React, { useContext, useEffect, useState } from 'react'
import { http } from '../api'
import { APIKEY } from '../api'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Skleton from '../components/Skleton'
function NewGames() {
    const ApiKey = useContext(APIKEY)
    const [newGames,setNewGames] = useState([])
    const [skleton,setSkleton] = useState(true)
    const [page,setPage] = useState(1)
    console.log(newGames);
    async function getSearch() {
        await http.get(`/games?key=${ApiKey}&ordering=-updated&page_size=15&page=${page}`)
        .then(res=> {
            setNewGames([...newGames,...res.data.results])
            setSkleton(false)
        })
        .catch(err=> {
            console.log(err);
        })
    }
    window.addEventListener('scroll',()=> {
        if(pageYOffset + window.innerHeight >= document.body.scrollHeight) {
            setPage(page + 1)
        }
    })
    useEffect(()=> {
        getSearch()
    },[page])
  return (
    <div className='container'>
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
            <Loader/>
        </div>
    </div>
  )
}

export default NewGames