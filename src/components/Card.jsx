import React from 'react'
import { Link } from 'react-router-dom'

function Card({item,category}) {
  return (
    <div className='cards_list_item'>
            <img src={item.short_screenshots.length > 0 ? item.short_screenshots[0].image : 'https://marketplace.canva.com/EAE-f1yMKXE/1/0/1600w/canva-purple-modern-neon-3d-joysticks-desktop-wallpaper-so4SpOlX42M.jpg'}/>
        <div className='cards_list_item_info'>
            <div className='cards_list_item_info_details'>
                <div className='rating' style={
                  {borderColor : 
                    `${Math.round(item.rating*10)/10 <= 3 ? `red` :
                     Math.round(item.rating*10)/10 <= 4 ? 'yellow' :
                      'green'}`
                    }
                }>{Math.round(item.rating*20)}</div>
            </div>
            <h2>
              <Link to={`/${category}/${item.slug}`}>{item.name}</Link>
            </h2>
        </div>
    </div>
  )
}

export default Card