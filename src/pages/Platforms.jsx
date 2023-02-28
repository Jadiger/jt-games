import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APIKEY, http } from '../api'

function Platforms() {
const ApiKey = useContext(APIKEY)
const [platforms,setPlatforms] = useState([])
const [singlePlatform,setSinglePlatform] = useState([])
console.log(platforms);
async function getPlatform() {
    await http.get(`games?key=${ApiKey}&genres=4`)
    .then(res=> {
        console.log(res);
    })
    .catch(err=> {
        console.log(err);
    })
}
async function getPlatforms() {
    await http.get(`/platforms?key=${ApiKey}`)
    .then(res=> {
        setPlatforms(res.data.results)
    })
    .catch(err=> {
        console.log(err);
    })
}
useEffect(()=> {
    getPlatforms()
    getPlatform()
},[])
  return (
    <div className='platforms'>
        <div className='platforms_title'>Platforms</div>
        <div className='platforms_list'>
        
        {
            platforms.length > 0 ? (
                platforms.map((item)=> {
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
                                                <Link to={`/${item.slug}/${game.slug}`}>{game.name}</Link>
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
  )
    }

export default Platforms