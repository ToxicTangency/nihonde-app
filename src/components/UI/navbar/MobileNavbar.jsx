import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileNavbar({ openMenu }) {
  return (
    <nav className='menu__body'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link className='menu__link' to='/' onClick={openMenu}>
            Home
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/posts' onClick={openMenu}>
            Posts
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/about' onClick={openMenu}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
