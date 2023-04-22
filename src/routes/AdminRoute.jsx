import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Login from '../admin/page/login/Login'
// import { Dashboard } from '../admin/page/dashboard/Dashboard'
import Login from '../admin/page/login/Login'
import Dashboard from '../admin/page/dashboard/Dashboard'

import { useSelector } from 'react-redux'
import NotFound from '../components/notfound/NotFound'

export const RouterAdmin = () => {

    const { user } = useSelector((state) => state.auth)
    return (
        <div>
            <Routes>

                <Route path='/admin' element={<Navigate to={'/admin/login'} />} />
                <Route path='/admin/login' element={<Login />} />
                {
                    user ?
                        <Route path='/admin/dashboard' element={<Dashboard />} />
                        :

                        <Route path='*' element={<NotFound />} />
                }


                <Route path='*' element={<NotFound />} />

            </Routes>
        </div>
    )
}

export default RouterAdmin