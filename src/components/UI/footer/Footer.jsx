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
          <div className='footer__copyright'>© 2022 Noiceland</div>
        </div>

        <div className='footer__menu'>
          <div className='footer__categories'>
            <div className='footer__tag'>Categories</div>

            <div className='footer__categories-wrapper'>
              <div className='footer__category'>
                <Link to='/category/Interactive-design'>
                  Interactive Design
                </Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/Architecture'>Architecture</Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/Graphic-design'>Graphic Design</Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/Photography'>Photography</Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/Illustration'>Illustration</Link>
              </div>
            </div>
          </div>

          <div className='footer__categories'>
            <div className='footer__tag'>Information</div>
            <div className='footer__categories-wrapper'>
              <div className='footer__category'>
                <Link to='/'>home</Link>
              </div>
              <div className='footer__category'>
                <Link to='/posts'>posts</Link>
              </div>
              <div className='footer__category'>
                <Link to='/about'>about</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
