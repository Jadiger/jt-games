import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoSite from '../assets/logo.png'
import toTopIcon from '../assets/icons/totop.png'

function Header() {
    const pathName = window.document.location.pathname
    const [toTopDisplay,setToTopDisPlay]= useState('none')
    window.addEventListener('scroll',()=> {
        if (pageYOffset + window.innerHeight > window.innerHeight + 50) {
            setToTopDisPlay('block')
        } else {
            setToTopDisPlay('none')
        }
    })
    function toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
      console.log(window.scroll);
    }
    useEffect(()=> {
        toTop()
    },[window.document.location.pathname])
  return (
    <>
    <header>
        <div className='logo'>
                <img src={logoSite}/>
            </div>
        <div className='header_details'>Details</div>
        <span className='to_top' style={{display: toTopDisplay}}>
            <img src={toTopIcon} onClick={
                ()=> {
                    window.scrollTo(0,0)
                }
            }/>
        </span>
    </header>
    <nav>
            <ul className='nav_links'>
                <li className='nav_link'>
                <NavLink to='/'>
                    <i className='bx bxs-grid-alt'></i>
                    Home
                    </NavLink>
                </li>
                <li className='nav_link'>
                    <NavLink to='/popular'>
                        <i className='bx bxs-bomb'></i>
                        Popular</NavLink>
                </li>
                <li className='nav_link'>
                    <NavLink to='/new-games'>
                        <i className='bx bxs-bolt'></i>New</NavLink>
                </li>
                <li className='nav_link'>
                    <NavLink to='/platforms'>
                        <i className='bx bxs-game'></i>Platforms</NavLink>
                </li>
                <li className='nav_link'>
                    <NavLink to='/genres'>
                        <i className='bx bxs-planet'></i>Genres</NavLink>
                </li>
            </ul>
        


        <div className='user'>
            <div className='user_info'>
                <i className='bx bxs-user'></i>
                User
                <span className='user_info_edit'>
                    <i className='bx bxs-cog' ></i>
                </span>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header