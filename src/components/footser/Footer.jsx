import React from 'react'
import classes from './footer.module.css'
import { Col, Row } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <footer className={classes.container}>
            <Row>
                <Col lg="4" className={classes.box1}>
                    <div className={classes.logo}>
                        <img src={logo} />
                        <div className={classes.logodetils}>
                            <h4>Real Interior</h4>
                            <BsInstagram title='instagram' className={classes.instagram} />
                        </div>
                    </div>

                </Col>
                <Col lg="4" className={classes.box2}>
                    <h4>Contact Us</h4>
                    <ul className={classes.contact}>
                        <li>
                            Vanniyan villai, Vellicode, Mulagumoodu (P.O),
                            K.K Dist.
                        </li>
                        <li>
                            +91 999999988
                        </li>
                        <li>
                            +91 999997788
                        </li>
                        <li>
                            tlineinteriors@gmail.com

                        </li>
                        <li>
                            info@t-lineinteriors.com
                        </li>
                    </ul>
                </Col>
                <Col lg="4" className={classes.box3}>
                    <h4>Links</h4>
                    <ul className={classes.links}>
                        <li>
                            <Link to={'/about'}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link >
                                Delivery
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Contact'} >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}
