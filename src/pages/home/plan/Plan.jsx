import React from 'react'
import { Col, Row } from 'react-bootstrap'
import classes from './plan.module.css'





const Plan = () => {

    const List = [
        {
            id: "1",
            title: "Concept",
            para: "concept is the central theme that all the design elements are focused upon",
            right: "fade-right"
        },
        {
            id: "2",
            title: "Design",
            right: "fade-left",
            para: "Design is the science of understanding behaviors to help property owners create a functional room within a building"
        },
        {
            id: "3",
            title: "Make it happen",
            right: "fade-right",
            para: "Good interior design, tailored to each individual's personal history and emotions, is a proven way to promote good mental health."
        },
        {
            id: "4",
            title: "Plan",
            right: "fade-left",

            para: "Real comfort, Visual and physical is vital to every room so we plan that brings a way to it."
        },
        {
            id: "5",
            right: "fade-right",
            title: "Build",
            para: "Every best view comes after every hardest Build."
        },
    ]


    return (
        <div className={classes.container}>
            <Row>
                <h1>
                    Our work process make your <span>dream</span> true
                </h1>
                {
                    List.map((val, idx) => {
                        return (
                            <Col lg="6" className={classes.col} key={idx} data-aos={val.right} data-aos-duration="1500">
                                <div className={classes.card}>
                                    <h4>{val.title}</h4>
                                    <p>{val.para}</p>
                                </div>
                            </Col>
                        )
                    })
                }

            </Row>
        </div>
    )
}

export default Plan
