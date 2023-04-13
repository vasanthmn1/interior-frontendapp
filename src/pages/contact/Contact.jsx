import React from 'react'
import axios from 'axios';
import classes from './contact.module.css'
import { Button, Col, Row } from 'react-bootstrap'
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const handleClick = () => {
        toast.success('Thanks for fill I will Call 24Hovers ');
    };
    let myFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            city: "",
            number: "",
            message: ""
        },
        validate: (value) => {
            let errors = {}

            if (!value.name) {
                errors.name = "Entet Full Name..."
            }

            if (!value.email) {
                errors.email = "Entet Your E-mail..."
            }
            if (!value.city) {
                errors.city = "Entet Your city..."
            }
            if (!value.number) {
                errors.number = "Entet Your Mobile Number..."
            }
            if (!value.message) {
                errors.message = "Fill Some MEssage...."
            }
            return errors;
        },

        onSubmit: async (value) => {
            // https://interior-phk8.onrender.com
            const res = await axios.post('https://interior-phk8.onrender.com/data/adddata', value)
            console.log(res.data);
            value.name = ""
            value.city = ""
            value.email = ""
            value.number = ""
            value.message = ""
            handleClick()

        }
    })
    // console.log(JSON.stringify(import.meta.env))
    return (
        <div className={classes.container}>

            <ToastContainer />
            <div className={classes.info}>
                <h1>{import.meta.env.ADDDATA}</h1>
                <p>Any questions or suggestions?</p>
                <p>Write us a message and we will contact you!</p>
            </div>
            <Row className={classes.contactContainer}>
                <Col lg="4" md="5" className={classes.detail}>
                    <h1>Contacts</h1>

                    <div className={classes.adderes}>
                        <p>
                            Vanniyan villai, Vellicode , Mulagumoodu (P.O) K.K Dist
                        </p>
                        <p>
                            tlineinteriors@gmail.com, info@t-lineinteriors.com
                        </p>
                        <p>
                            +91 9488123455
                            +91 9876543211
                        </p>
                    </div>
                </Col>
                <Col lg="8" md='7' className={classes.form}>
                    <form onSubmit={myFormik.handleSubmit}>
                        <Row>
                            <Col md="6" className={classes.box1}>
                                <label>Name:</label>
                                <input type='text'
                                    className={myFormik.errors.name && myFormik.touched.name ? classes.errorInput : classes.successInput}
                                    name='name'
                                    onBlur={myFormik.handleBlur}
                                    value={myFormik.values.name}
                                    onChange={myFormik.handleChange}
                                    placeholder="Name"
                                />
                                {
                                    myFormik.errors.name && myFormik.touched.name ?
                                        <label style={{ color: "red" }}  >{myFormik.errors.name}</label>
                                        : null
                                }
                            </Col>
                            <Col md="6" className={classes.box1}>
                                <label>What city are you from?</label>
                                <input type='text'
                                    className={myFormik.errors.city && myFormik.touched.city ? classes.errorInput : classes.successInput}
                                    value={myFormik.values.city}
                                    onChange={myFormik.handleChange}
                                    name='city'
                                    onBlur={myFormik.handleBlur}

                                />
                                {
                                    myFormik.errors.city && myFormik.touched.city ?
                                        <label style={{ color: "red" }}  >{myFormik.errors.city}</label>
                                        : null
                                }
                            </Col>
                            <Col md="6" className={classes.box1}>
                                <label>E-mail:</label>
                                <input type='text'
                                    name='email'
                                    className={myFormik.errors.email && myFormik.touched.email ? classes.errorInput : classes.successInput}
                                    onBlur={myFormik.handleBlur}

                                    value={myFormik.values.email}
                                    onChange={myFormik.handleChange}
                                />

                                {
                                    myFormik.errors.email && myFormik.touched.email ?
                                        <label style={{ color: "red" }}  >{myFormik.errors.email}</label>
                                        : null
                                }
                            </Col>
                            <Col md="6" className={classes.box1}>
                                <label>Phone Number:</label>
                                <input type='number'
                                    name='number'
                                    className={myFormik.errors.number && myFormik.touched.number ? classes.errorInput : classes.successInput}
                                    value={myFormik.values.number}
                                    onChange={myFormik.handleChange}
                                    onBlur={myFormik.handleBlur}

                                />
                                {
                                    myFormik.errors.number && myFormik.touched.number ?
                                        <label style={{ color: "red" }}  >{myFormik.errors.number}</label>
                                        : null
                                }
                            </Col>
                            <Col md="8" className={classes.box1}>
                                <label>Message</label>
                                <textarea rows="5" cols='7'
                                    name='message'
                                    className={myFormik.errors.message && myFormik.touched.message ? classes.errorInput : classes.successInput}
                                    onBlur={myFormik.handleBlur}

                                    value={myFormik.values.message}
                                    onChange={myFormik.handleChange}

                                >

                                </textarea>
                                {
                                    myFormik.errors.message && myFormik.touched.message ?
                                        <label style={{ color: "red" }}  >{myFormik.errors.message}</label>
                                        : null
                                }
                            </Col>
                            <Col md="3" className={classes.btnbox}>
                                <button className={classes.btn} type='submit'>
                                    Send
                                </button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div >
    )
}

export default Contact
