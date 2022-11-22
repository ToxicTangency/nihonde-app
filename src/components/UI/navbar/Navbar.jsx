import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='header__nav'>
      <ul>
        <li className='header__nav-elem'>
          <Link to='/'>Главная</Link>
        </li>
        <li className='header__nav-elem'>
          <Link to='/posts'>Блог</Link>
        </li>
        <li className='header__nav-elem'>
          <Link to='/about'>О нас</Link>
        </li>
      </ul>
    </nav>
  )
}
