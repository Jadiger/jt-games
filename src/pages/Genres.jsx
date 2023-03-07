import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APIKEY, http } from '../api'

function Genres() {
    const ApiKey = useContext(APIKEY)
    const [genres,setGenres] =useState([])
    console.log(genres);
    async function getGenres() {
        http.get(`/genres?key=${ApiKey}`)
        .then(
            res=> {
                setGenres(res.data.results)
            }
        )
        .catch(
            err=> {
                console.log(err);
            }
        )
    }
    useEffect(()=> {
        getGenres()
    },[])
  return (
    
    <div className="container">
            <div className='platforms'>
                <div className='platforms_title'>Genres</div>
                <div className='platforms_list'>
                
                {
                    genres.length > 0 ? (
                        genres.map((item)=> {
                            return (
                                <div className='platform' key={item.id}>
                                    <img src={item.image_background}/>
                                    <div className="platform_content">
                                        <h2>{item.name}</h2>
                                        <h4>Popular items</h4>
                                        {item.games.splice(0,3).map(
                                            game=> {
                                                return (
                                                    <p>
                                                        <Link to={`/${item.slug}/${game.slug}`} key={game.id}>{game.name}</Link>
                                                    </p>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            )
                        }) 

                        
                    ) : ''
                }
            </div>
            </div>
    </div>
  )
}

export default Genres