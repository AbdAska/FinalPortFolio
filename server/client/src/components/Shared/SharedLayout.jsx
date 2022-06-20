import React from 'react'
import { Outlet } from 'react-router-dom'
import './SharedLayout.scss'
import Sidebar from '../Sidebar/Sidebar'
const SharedLayout = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default SharedLayout