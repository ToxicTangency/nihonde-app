import React from 'react'
import cl from './Loader.module.css'

export default function Loader() {
  return (
    <div className={cl.loader}>
      <div className={cl.dot1}></div>
      <div className={cl.dot2}></div>
      <div className={cl.dot3}></div>
    </div>
  )
}
