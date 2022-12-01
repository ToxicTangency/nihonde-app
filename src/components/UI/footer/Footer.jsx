import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/category/history'>История</Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/food'>Кухня</Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/arhitecture'>Архитектура</Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/nature'>Природа</Link>
              </div>
              <div className='footer__category'>
                <Link to='/category/modern-culture'>Современная культура</Link>
              </div>
            </div>
          </div>

          <div className='footer__categories'>
            <div className='footer__tag'>Меню</div>
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
  );
}
