import React, { useEffect, useState } from 'react'
import classes from './login.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginFaluire, loginSuccess } from '../../redux/feutures/AuthSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isError, isLoading, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    const { link } = useSelector(state => state.link)


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    useEffect(() => {
        if (isSuccess && user) {

        }
    }, [])



    const handellogin = async (e) => {
        e.preventDefault();
        // dispatch(loginStart())
        try {
            const res = await axios.post(`${link}/auth/login`, { email, password, code })
            toast.success("login success")

            dispatch(loginSuccess(res.data))
            localStorage.setItem('user', JSON.stringify(res.data))
            navigate('/admin/dashboard');
        } catch (error) {
            console.log(error);
            toast.success("login success")
            dispatch(loginFaluire())
        }
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handellogin}>
                <h1>Login</h1>
                <input type="text" placeholder="Email"
                    value={email} name='email'
                    onChange={handleEmailChange} />
                <input type="password"
                    autoComplete="on"
                    placeholder="Password"
                    value={password} name='password'
                    onChange={handlePasswordChange} />
                <input type="code"
                    autoComplete="on"
                    placeholder="Code"
                    value={code} name='code'
                    onChange={handleCodeChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login