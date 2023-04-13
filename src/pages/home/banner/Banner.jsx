import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './banner.module.css'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className={classes.container}>
            <div className={classes.imagecontainer}>
                <div className={classes.box} >
                    <h1 data-aos="fade-right" data-aos-duration="1500">Open the Door to Better <br />
                        Kind Interior
                    </h1>
                    <button className={classes.btn} data-aos="fade-up" data-aos-duration="1500" >
                        <Link to={'/contact'}> Contact</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner