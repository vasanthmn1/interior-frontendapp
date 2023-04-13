import React from 'react'
import classes from './chooseus.module.css'
import { Col, Image, Row } from 'react-bootstrap'
import img from '../../../assets/choose.jpg'

const ChooseUs = () => {
    return (
        <div className={classes.container}>
            <Row>
                <Col lg="6">
                    <div className={classes.box1} data-aos="fade-right" data-aos-duration="1500">
                        <Image src={img} fluid />
                        <img />
                    </div>
                </Col>
                <Col lg="6">
                    <div className={classes.box2}>
                        <h1>Why choose <span>us</span></h1>
                        <p>
                            We are transparent, ethical in our conduct, and <br /> stand on our principles. Being Responsive  to change and  <br /> meeting tomorrow’s needs today. Thinking New! Thinking Out of the Box!<br /> Stay  ahead  through the Continuous Learning process.  Finding Customer Issues and offering business solutions.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ChooseUs
