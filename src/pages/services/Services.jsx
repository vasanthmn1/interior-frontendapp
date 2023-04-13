import React from 'react'
import classses from './services.module.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import services from '../../assets/servicesbanner.jpeg'
import img1 from '../../assets/services1.webp'
import img2 from '../../assets/services2.jpg'
import img3 from '../../assets/services3.jpg'
import img4 from '../../assets/services4.jpg'
import img5 from '../../assets/services5.jpg'
import img6 from '../../assets/services6.jpg'


const Services = () => {

    const servisesList = [
        {
            id: "1",
            img: img1,
            heading: "Modular Kitchen",
            para: "Modular kitchens are considered to be the most practical and stylish solution for your kitchen interior. A harmonious blend of utility and aesthetics, they are available in a variety of colors, textures and finishes to match everyone's preferences. Of Couse it comes with a water proof material that carries the warranty.",
            link: ""
        },
        {
            id: "2",
            img: img2,
            heading: "False Ceiling",
            para: "False ceilings are the most preferred option to make the room looks great. They can conceal wiring, while being energy efficient. They can be decorative, while being air regulators. They can be functional, and pretty at the same time. False ceilings are essentially used for sound proofing, extremely functional and have thermal insulation along with fire and water resistant properties.",
            link: ""
        },
        {
            id: "3",
            img: img3,
            heading: "Wall Units",
            para: "Wall units are also referred as a hotspot of the home, where people who usually touch and use it every day. This kind of furniture can be utilized as storage, provide a surface as entertainment centers for television or audio equipment or have many other household or office uses.",
            link: ""
        },
        {
            id: "4",
            img: img4,
            heading: "Wall Partition",
            para: "A partition wall is a single wall or partition made using bricks, studding, glass, or other such materials. Different types of partition walls are created to divide a room or separate one area from the other. Partition walls are designed as non-load bearing walls. It may be Fixed, foldable, or collapsible.",
            link: ""
        },
        {
            id: "5",
            img: img5,
            heading: "Morden Handrails/Banisters",
            para: "A beautiful staircase has the potential of becoming a stunning focal point in any home. In fact, the handrail is an accent piece by nature. It has been an eye-catching element from the beginning and, as its design evolved over the years, its status never changed. In fact, it became more and more important and interior designers have made it the star of their projects.",
            link: ""
        },
        {
            id: "6",
            img: img6,
            heading: "Wardrobe and Storage Cabinets",
            para: "WARDROBE is a collection of wearing apparel, it may not sound particularly exciting but this will be a one stop solution finding somewhere to store something as bulky as bedding, sheets, pillowcases and duvets etc. Space planning is a vast subject where the storage cabinet will be the only way we rely on.",
            link: ""
        },
    ]

    return (
        <Container fluid>
            <div className={classses.container}>
                <Row className={classses.warper1} >
                    <Col lg='6' >
                        <div className={classses.box1}>
                            <h2>
                                A team United by shared values
                            </h2>
                            <p>
                                We are fans of our business, we work for your emotions. We are happy to
                                see the family enjoying something new in
                                their life and we are happy with them, because interior design is
                                something more
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div>
                            <Image src={services} fluid />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg="12" className={classses.warper2} >
                        <div className={classses.box2}>
                            <h1>5</h1>
                            <div className={classses.box2min}>
                                <h2>
                                    Professional Designers
                                </h2>
                                <h6>In our team</h6>
                            </div>
                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col lg="12" className={classses.warper} >
                        <div className={classses.box3}>
                            <h1>We are ready to offer you the following services</h1>
                        </div>
                    </Col>

                    {/* <div className={classses.box4}> */}

                    {
                        servisesList.map((val, idx) => {
                            return (
                                <Container key={idx}>
                                    <Row className={classses.serviceList}>
                                        <Col lg='6' className={classses.serviselistimgbox} >
                                            <Image src={val.img} />
                                        </Col>
                                        <Col lg='6' className={classses.serviselistcontoantbox}>
                                            <h2>{val.heading}</h2>
                                            <p>{val.para}</p>
                                        </Col>
                                    </Row>
                                </Container>

                            )
                        })

                    }
                    {/* </div> */}


                </Row>

            </div>
        </Container>
    )
}

export default Services
