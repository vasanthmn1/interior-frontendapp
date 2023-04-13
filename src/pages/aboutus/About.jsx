import React from 'react'
import classes from './about.module.css'
import { Col, Image, Row } from 'react-bootstrap'
import img1 from '../../assets/about.jpg'
import profile from '../../assets/profile.jpg'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

export const About = () => {

    const list = [
        {
            id: "1",
            num: "2",
            para: "Ongoing projects"
        },
        {
            id: "1",
            num: "22",
            para: "Happy customers"
        },
        {
            id: "1",
            num: "2",
            para: "Years experience"
        },
        {
            id: "1",
            num: "7",
            para: "Commercial project"
        },
    ]

    const profileList = [
        {
            id: "1",
            heading: "Durability",
            img: icon1,
            width: '100px',

            para: "Exclusive 15 Years of Warranty depending on the material we select",
        },
        {
            id: "2",
            heading: "Modern interior",
            img: icon2,
            width: '70px',
            para: "A guide to modern interior styles and design"
        },
        {
            id: "Professional team",
            heading: "Modern interior",
            width: '120px',

            img: icon3,
            para: "We work with handful of experience staffs"
        },
    ]

    return (
        <div className={classes.container}>
            <div className={classes.warper1}>
                <Row>
                    <Col lg="6">
                        <div className={classes.box1}>
                            <h4>History of our creation</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facere labore sapiente impedit consequuntur consectetur quia rem non voluptas modi, vitae atque totam ea cupiditate laudantium suscipit iusto. Temporibus minus sapiente accusamus earum natus maiores, nemo est commodi repellat vel saepe facere quisquam veniam, et magni, minima similique sint laboriosam quia reprehenderit pariatur. Libero hic placeat nemo harum natus, nihil, numquam quasi doloremque quis quos exercitationem rem quidem molestiae doloribus.
                            </p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className={classes.image}>
                            <Image src={img1} fluid />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={classes.warper2}>
                <Row>
                    <Col lg="4" md="12" className={classes.box2}>
                        <h4>Architects
                            with different approach</h4>
                    </Col>
                    {
                        list.map((val, idx) => {
                            return (
                                <Col key={idx} className={classes.box3} >
                                    <h2>{val.num}</h2>
                                    <p>{val.para}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
            <div className={classes.warper3}>
                <Row>
                    <Col lg="6" className={classes.box4}>
                        <div className={classes.profile} >
                            <img src={profile} />
                            <div className={classes.box5}>
                                <p className={classes.profileheading}>Founder</p>
                                <h6 className={classes.profilename}>Vasanth MN</h6>
                                <p className={classes.profilepara}>
                                    Professionally engaged in
                                    Interior design since 2019.
                                    Vasanth has Experienceworking in
                                    India in the related Field.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <Row>
                            {
                                profileList.map((val, idx) => {
                                    return (
                                        <Col lg="12" key={idx} className={""}>
                                            <div className={classes.box6}>
                                                <Image src={val.img} style={{ width: val.width }} />
                                                <div className={classes.box6detali}>
                                                    <h3>{val.heading}</h3>
                                                    <p>{val.para}</p>
                                                </div>

                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
