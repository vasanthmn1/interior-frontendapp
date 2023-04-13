import React, { useEffect, useRef, useState } from 'react'

import logo from '../../assets/logo.png'
import classes from './header.module.css'
import { Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import '../../App.css'
const Header = () => {
    const nav_link = [
        {
            path: '/home',
            dispaly: 'home'
        },
        {
            path: '/about',
            dispaly: 'About'
        },
        {
            path: '/services',
            dispaly: 'services'
        },
        {
            path: '/gallery',
            dispaly: 'gallery'
        },
        {
            path: '/contact',
            dispaly: 'contact'
        },

    ]
    const headerRef = useRef(null)

    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add(classes.stickyHeader)


            } else {
                headerRef.current.classList.remove(classes.stickyHeader)


            }
        })
    }

    useEffect(() => {
        stickyHeader()


        // return window.removeEventListener('scroll', stickyHeader)
    }, [])


    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <header className={classes.header} ref={headerRef}  >

                <Container>
                    <Row>
                        <div className={classes.wrapper}>

                            <div className={classes.logo}>
                                <img src={logo} />
                                <h4>Real Interior</h4>
                            </div>


                            <div className={showMenu ? classes.navigationa : classes.lg} onClick={toggleMenu}>

                                <ul className={showMenu ? classes.menu : classes.lgmenu}>
                                    {
                                        nav_link.map((val, idx) => {
                                            return (
                                                <li className='nav__items' key={idx}>
                                                    <NavLink className={navClass => navClass.isActive ? classes.active : classes.nav__item} to={val.path} >{val.dispaly}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            {/*                   contact                       */}

                            <div className={classes.contact}>
                                <h6>+919998887777</h6>
                                <Link to={'/contact'}>Order a call</Link>

                            </div>
                            <span className='mobile_menu' >
                                <AiOutlineMenu className={classes.toggleIcon} onClick={toggleMenu} />
                            </span>
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header
