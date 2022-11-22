import React from 'react'
import MobileNavbar from '../navbar/MobileNavbar'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Header() {
  const openMenu = () => {
    var root = document.getElementsByTagName('html')[0]
    root.classList.toggle('menu-open')
  }

  return (
    <header className='header' data-scroll='120' data-scroll-show>
      <div className='header__container'>
        <div className='header__menu menu'>
          <button
            onClick={openMenu}
            type='button'
            className='menu__icon icon-menu'>
            <span></span>
          </button>
          <MobileNavbar openMenu={openMenu} />
        </div>

        <div className='header__logo'>
          <Link className='menu__link' to='/'>
            <img src='/img/logo.png' alt='' />
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  )
}
