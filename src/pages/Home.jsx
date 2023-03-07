import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APIKEY } from '../api'
import { http } from '../api'
import Card from '../components/Card'
import HomeCard from '../components/HomeCard'
import Skleton from '../components/Skleton'
function Home() {
    const [popularGames,setPopularGames] = useState([])
    const [skleton,setSkleton] = useState(true)
    const ApiKey = useContext(APIKEY)
    // console.log(games);

    async function getGames() {
        await http.get(`/games?key=${ApiKey}&page_size=10`)
        .then(res=> {
            setPopularGames(res.data.results)
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
    <div className='container'>
         <div className='cards'>
             <div className='home_cards_title'>
                 <Link to='/popular'>Popular Games</Link>
             </div>
             {
                 skleton? <Skleton/> : (
                     <div className='home_cards_list'>
                 {
                     popularGames.length>0 ?
                     (
                         popularGames.map(item=> {
                             return <HomeCard item={item} key={item.id} category='popular'/>
                         })
                     )
                     : ''
                 }
             </div>
                 )
             }
         </div>
    </div>
  )
}

export default Home