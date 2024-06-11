import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6'

export default function UpdatedHomePage({ onScrollToContact }) {
    return (
        <div className='home_page_section'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='left_side'>
                            <p className='introduction'> i am Manish Verma</p>
                            <h1>Digital marketing expert</h1>
                            <p className='descr'>I solve complex user experience challenges to create integrity-driven digital marketing solutions that connect and engage billions of people.</p>
                        </div>
                        <div className='resume_btn'>
                            <div className='cont_act_btn'>
                                <Button className='cont_btn' onClick={onScrollToContact}>Contact Me</Button>
                            </div>
                            <div className='social'>
                                <Nav.Link href="https://www.upwork.com/freelancers/~01d672b038a81f6f0f" target='_blank'>
                                    <span><FaUpwork /></span>
                                </Nav.Link>
                                <Nav.Link href="https://www.facebook.com/people/Manish-Verma/pfbid0YV2V8eNSm6nZisqjVAHWhwLncELXDzSTUR23SDHf6H3HpGHKCPT4FBp6WGR6xMevl/" target='_blank'><span><FaFacebookF /></span></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/manish-verma-brandcleverdotin/?original_referer=" target="_blank"><span><FaLinkedinIn /></span></Nav.Link>
                                <Nav.Link href="https://www.instagram.com/maniflix/" target="_blank"><span><FaInstagram /></span></Nav.Link>
                                <Nav.Link href="https://wa.me/9877268100" target="_blank"><span><FaWhatsapp /></span></Nav.Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='ceo_img'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBbRIpnbEj9slII1lqCEh-zUUs6ZCXX5udw&s' alt='ceo_img' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
