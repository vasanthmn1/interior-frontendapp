import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '../../components/adminHeader/AdminHeader'
import { AdminDasboard } from '../../components/adminDasboard/AdminDasboard'
// import { AdminHeader } from '../../components/adminHeader/AdminHeader'
import classes from './dashboard.module.css'
const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {

        if (!user) {
            navigate('/dashboard/login')
        }

    }, [user])
    return (
        <div className={classes.container}>
            <AdminHeader />
            <AdminDasboard />
        </div>
    )
}
export default Dashboard
