import { useState } from 'react'
import './App.css'
import Layout from './layout/Layout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AdminRoute from './routes/AdminRoute'
import { useSelector } from 'react-redux'
function App() {

  return (
    <>
      <Layout />
    </>
  )
}

export default App
