import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PublicRoutes } from '../router/routes'

export default function AppRouter() {
  return (
    <Routes>
      {PublicRoutes.map(route => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  )
}
