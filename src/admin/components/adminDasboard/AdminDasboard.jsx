import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Button, Container, } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import classes from './adminDasboard.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
export const AdminDasboard = () => {
    const [users, setusers] = useState([])
    const [isloding, setisloding] = useState(true)
    const { link } = useSelector(state => state.link)

    useEffect(() => {
        getUsers()
    }, [])

    let getUsers = async () => {
        try {
            let usersDdata = await axios.get(`${link}/data/getdata`)
            setusers(usersDdata.data);
            setisloding(false)
        } catch (error) {
            console.log(error);
        }
    }

    let handelDelet = async (id) => {

        try {
            let conform = window.confirm("are you sure you want to delete ")
            if (conform) {
                await axios.delete(`/data/${id}`)
                getUsers();
                toast.success('Data deleted successfully!')

            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={classes.container}>
            <ToastContainer />
            <main className={classes.table}>
                <section className={classes.table__header}>


                </section>
                <section className={classes.table__body}>
                    <table>
                        <thead>
                            <tr>
                                <th>#  </th>
                                <th>Time</th>
                                <th>Name</th>
                                <th> city </th>
                                <th>E-mail</th>
                                <th>Number</th>
                                <th>Message</th>
                                <th>action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((val, idx) => {
                                    return (
                                        <tr idx={idx}>
                                            <td>{idx + 1}</td>
                                            <td>
                                                <p className={classes.time}>
                                                    {moment(val.createdAt).format("DD-MM-YYYY")}
                                                </p>
                                            </td>
                                            <td>{val.name}</td>
                                            <td>{val.city}</td>
                                            <td>{val.email}</td>
                                            <td>{val.number}</td>
                                            <td  >
                                                <p className={classes.message}>
                                                    {val.message}
                                                </p>
                                            </td>
                                            <td onClick={() => handelDelet(val._id)}>
                                                <p className={classes.delbtn}>
                                                    Del
                                                </p>
                                            </td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </section>
            </main>




        </div>


    )
}
