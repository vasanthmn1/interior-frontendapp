import React from 'react'
import classes from './home.module.css'
import Banner from '../../pages/home/banner/Banner'
import Details from './details/Details'
import ChooseUs from './chooseus/ChooseUs'
import Plan from './plan/Plan'
import { Footer } from '../../components/footser/Footer'



const Home = () => {
    return (
        <div className={classes.container}>
            <Banner />
            <Details />
            <ChooseUs />
            <Plan />

        </div>
    )
}

export default Home
