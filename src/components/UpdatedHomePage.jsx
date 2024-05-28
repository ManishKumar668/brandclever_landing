import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
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
                                <Button className='cont_btn' onClick={onScrollToContact}>Contact Us</Button>
                            </div>
                            <div className='social'>
                                <span><FaUpwork /></span>
                                <span><FaFacebookF /></span>
                                <span><FaLinkedinIn /></span>
                                <span><FaInstagram /></span>
                                <span><FaWhatsapp /></span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='ceo_img'>
                            <img src='https://themejunction.net/html/gerold/demo/assets/img/hero/me.png' alt='ceo_img' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
