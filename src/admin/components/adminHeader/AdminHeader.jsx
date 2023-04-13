import React from 'react'
import classes from './adminHeader.module.css'
import logo from '../../../assets/logo.png'
import { Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/feutures/AuthSlice'
import { useNavigate } from 'react-router-dom'
const AdminHeader = () => {

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigator = useNavigate()


    const onlogout = () => {
        dispatch(logout())
        navigator(`/admin/login`)
    }
    return (
        <div className={classes.container}>
            <div className={classes.box1}>
                <img src={logo} />
            </div>
            <div className={classes.box2}>
                <h4>{user.name}</h4>
                <button onClick={onlogout} >
                    Logout
                </button>
            </div>
        </div>
    )
}
export default AdminHeader
