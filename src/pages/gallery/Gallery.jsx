import React from 'react'
import classes from './gallery.module.css'

import img1 from '../../assets/services3.jpg'
import img2 from '../../assets/services4.jpg'
import img3 from '../../assets/services5.jpg'
import img4 from '../../assets/services6.jpg'
import { Col, Image, Row } from 'react-bootstrap'

const Gallery = () => {

    const list = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img4
        },
        {
            img: img3
        },
        {
            img: img1
        },
        {
            img: img2
        },

    ]


    return (
        <div className={classes.container}>
            <div className={classes.warper}>
                <Row>
                    {
                        list.map((val, idx) => {
                            return (
                                <Col lg='4' key={idx} className={classes.imgcontainer}>
                                    <img src={val.img} className={classes.image} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default Gallery
