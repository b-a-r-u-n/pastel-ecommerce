import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import PaymentPage from './pages/PaymentPage'
import SuccessPage from './pages/SuccessPage'
import AddressPage from './pages/AddressPage'
import AboutPage from './pages/AboutPage'
import ContactusPage from './pages/ContactusPage'
import ErrorPage from './pages/ErrorPage'
import LoadingPage from './pages/LoadingPage'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from './features/homeSlice'
import { useEffect } from 'react'

function App() {

  const {isLoading, isError} = useSelector(state => state.home); 

  const dispatch = useDispatch()
  
   useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="address" element={<AddressPage />} />
        <Route path='contact' element={<ContactusPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    )
  )

  return (
    <>
      {
        isLoading ? <LoadingPage /> : (isError ? <ErrorPage /> : <RouterProvider router={router} />) 
      }
    </>
  )
}

export default App
