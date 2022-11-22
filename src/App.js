import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './components/AppRouter'
import Header from './components/UI/header/Header'
import Footer from './components/UI/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='page'>
        <section className='home'>
          <div className='home__container'>
            <AppRouter />
          </div>
        </section>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
