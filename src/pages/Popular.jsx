import React, { useState,useContext, useEffect  } from 'react'
import { http } from '../api'
import { APIKEY } from '../api'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Skleton from '../components/Skleton'
import NewGames from './NewGames'
function Popular() {
const [popularGames,setPopularGames] = useState([])
const [skleton,setSkleton] = useState(true)
const [page,setPage] = useState(1)
const ApiKey = useContext(APIKEY)

async function getPopularGames(){
    await http.get(`/games?key=${ApiKey}&ordering=-added&page_size=30&page=${page}`)
    .then(res=> {
        setPopularGames(popularGames.concat(res.data.results));
        setSkleton(false)
    })
    .catch(err=> {
        console.log(err);
    })
}
useEffect(()=> {
    getPopularGames()
},[page])
window.addEventListener('scroll',()=> {
    if(pageYOffset + window.innerHeight >= document.body.scrollHeight) {
        setPage(page + 1)
    }
})
// window.scrollTo(0,0)
window.scrollTo()
console.log(page);
  return (
    <div className='cards'>
            <div className='cards_title'>
                Popular Games
            </div>
            {
                skleton ? <Skleton/> : (
                    <div className='cards_list'>
                {
                    popularGames.length>0 ?
                    (
                        popularGames.map(item=> {
                            return <Card item={item} key={item.id}/>
                        })
                    )
                     : ''
                }
            </div>
                )
            }
            <Loader/>
        </div>
  )
}

export default Popular