import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='header__nav'>
      <ul>
        <li className='header__nav-elem'>
          <Link to='/'>Home</Link>
        </li>
        <li className='header__nav-elem'>
          <Link to='/posts'>Posts</Link>
        </li>
        <li className='header__nav-elem'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}
