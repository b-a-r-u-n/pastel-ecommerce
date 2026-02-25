import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { getLocalStorageData } from './features/cartSlice'

const Layout = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocalStorageData());
  },[])

  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout
