import React from 'react'
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { AiTwotonePicture } from 'react-icons/ai'

export default function About() {
    return (
        <div>
            <section className='Banner_down_section padding_top_down'>
                <Container>
                    <div className='banner_down_Parent'>
                        <Row>
                            <Col md={5}>
                                <div className='Image_left_side_banner_down'>
                                    <img alt='banner_down_img' src='../images/banner_down.png'></img>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className='banner_down_about_me_start'>
                                    <div className='Uper_text_about'>
                                        <h6>Hello $ Welcome</h6>
                                        <h2>Everything <span style={{ color: "#09c3b3", fontWeight: "800" }}>About Me</span></h2>
                                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.<br></br><br></br>
                                            My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my PORTFOLIO</p>
                                    </div>
                                    <div className='down_four_div_about'>
                                        <div className='graphics_start'>
                                            <div className='image_and_text_about'>
                                                <div className='img_about_small'>
                                                    <AiTwotonePicture />
                                                </div>
                                                <div className='Seond_side_text_about'>
                                                    <h5>Graphic</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='graphics_start'>
                                            <div className='image_and_text_about'>
                                                <div className='img_about_small'>
                                                    <AiTwotonePicture />
                                                </div>
                                                <div className='Seond_side_text_about'>
                                                    <h5>Web Design</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='graphics_start'>
                                            <div className='image_and_text_about'>
                                                <div className='img_about_small'>
                                                    <AiTwotonePicture />
                                                </div>
                                                <div className='Seond_side_text_about'>
                                                    <h5>Photography</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='graphics_start'>
                                            <div className='image_and_text_about'>
                                                <div className='img_about_small'>
                                                    <AiTwotonePicture />
                                                </div>
                                                <div className='Seond_side_text_about'>
                                                    <h5>Development</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='About_down_button'>
                                        <Button className='all_btns'>My services</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

        </div>
    )
}
