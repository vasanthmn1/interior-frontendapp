import React from 'react'
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import detail from '../../../assets/slider2.jpg'
import classes from './details.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Details = () => {
    return (
        <div className={classes.detailes}>

            <div >
                <Row>
                    <Col lg="6" md="12">
                        <div className={classes.warper}>
                            <div className={classes.box1}>
                                <h1>We Make Your <span>Home</span> Better</h1>
                                <p className={classes.headingpara}>We are tending to the thousands of details it takes to
                                    <br />
                                    create a custom home tailored to your lifestyle</p>
                                <Link to='/contact'>
                                    <button className={classes.btn}>   To Order</button>
                                </Link>
                            </div>

                            <div className={classes.box2}>
                                <div className={classes.icon1}>
                                    <img src={icon1} />
                                    <p>
                                        Exclusive 15 Years
                                        of Warranty depending on the
                                        material we select
                                    </p>
                                </div>
                                <div className={classes.icon1}>
                                    <img src={icon2} />
                                    <p>
                                        A guide to modern
                                        interior styles and
                                        design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" data-aos="fade-left" data-aos-duration="1500">
                        <div className={classes.image}  >
                            <img src={detail} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Details
