import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import { About } from '../pages/aboutus/About'
import Services from '../pages/services/Services'
import Gallery from '../pages/gallery/Gallery'

import Aos from 'aos'
import NotFound from '../components/notfound/NotFound'



const RouterPage = () => {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/gallery' element={<Gallery />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </div>
    )
}

export default RouterPage
