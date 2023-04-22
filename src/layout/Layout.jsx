import React from 'react'
import RouterPage from '../routes/RouterPage'
import Header from '../components/header/Header'
import { Footer } from '../components/footser/Footer'

import AdminRoute from '../routes/AdminRoute'
import { Routes, useLocation } from 'react-router-dom'



const Layout = () => {

    const location = useLocation()
    return (
        <div>
            <div>
                {location.pathname.startsWith('/admin') ? <AdminRoute /> : <Header />}
                <RouterPage />
                {location.pathname.startsWith('/admin') ? null : <Footer />}

            </div>

        </div>
    )
}

export default Layout
