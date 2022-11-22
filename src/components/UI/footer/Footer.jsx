import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__top'>
          <div className='footer__logo'>
            <img src='img/logo-w.png' alt='' />
          </div>
          <div className='footer__copyright'>© 2022 Hihonde</div>
        </div>

        <div className='footer__menu'>
          <div className='footer__categories'>
            <div className='footer__tag'>Категории</div>

            <div className='footer__categories-wrapper'>
              <div className='footer__category'>
                <Link to='/category/traditions'>Традиции</Link>
              </div>
              <div className='footer__category'>
                <Link to='/'>Современная культура</Link>
              </div>
              <div className='footer__category'>
                <Link to='/'>Кухня</Link>
              </div>
              <div className='footer__category'>
                <Link to='/'>Архитектура</Link>
              </div>
            </div>
          </div>

          <div className='footer__categories'>
            <div className='footer__tag'>Information</div>
            <div className='footer__categories-wrapper'>
              <div className='footer__category'>
                <Link to='/'>Главная</Link>
              </div>
              <div className='footer__category'>
                <Link to='/posts'>Блог</Link>
              </div>
              <div className='footer__category'>
                <Link to='/about'>О нас</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
