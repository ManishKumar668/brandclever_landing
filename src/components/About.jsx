import React from 'react'
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { AiTwotonePicture } from 'react-icons/ai'

export default function About() {
    return (
        <div>
            <section className='Banner_down_section padding_top_down'>
                <Container>
                    <div className='banner_down_Parent'>
                        <Row className='About_row_sec'>
                            <Col md={5} className='About_left_side_set'>
                                <div className='Image_left_side_banner_down'>
                                <img className='not_show_desktop' alt='banner_down_img' src={`${process.env.PUBLIC_URL}/images/manish_verna_aboutsec.jpg`}></img>
                                    <img className='desktop_ims_show' alt='banner_down_img' src={`${process.env.PUBLIC_URL}/images/manish_verma_about.jpg`}></img>
                                </div>
                            </Col>
                            <Col md={7} className='About_right_side_set'>
                                <div className='banner_down_about_me_start'>
                                    <div className='Uper_text_about'>
                                        <h6>Hello $ Welcome</h6>
                                        <h2>Everything <span style={{ color: "#09c3b3", fontWeight: "800" }}>About Me</span></h2>
                                        <p>I am a Certified "TOP RATED" Expert Upwork freelancer, I have dedicated over 3320+ working hours throughout my tenure, earning a commendable USD 200k+ and maintaining a perfect 100% job success rate. <br></br><br></br>
                                            My expertise and dedication have helped numerous businesses across various industries achieve their e-commerce goals on the Shopify platform. Whether you're just starting out or looking to take your online store to the next level.
                                        </p>
                                    </div>
                                    <div className='down_four_div_about'>
                                        <div className='graphics_start'>
                                            <div className='image_and_text_about'>
                                                <div className='img_about_small'>
                                                    <AiTwotonePicture />
                                                </div>
                                                <div className='Seond_side_text_about'>
                                                    <h5>Graphic</h5>
                                                    <p>Encapsulates a visually compelling and communicative piece of artwork or design.</p>
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
                                                    <p>Refers to the process of creating and arranging elements on a website in a visually appealing.</p>
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
                                                    <p>is the art and practice of capturing images using light-sensitive materials or digital sensors to record visual.</p>
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
                                                    <p>refers to the process of growth, progress, and improvement in various aspects of human endeavour.</p>
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
