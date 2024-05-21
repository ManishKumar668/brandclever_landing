import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsWallet2 } from 'react-icons/bs'

export default function Biography() {
    return (
        <div>

            <section className='about_story padding_top_down'>
                <Container>
                    <div className='about_us_section_main_start'>
                        <div className='top_text_about'>
                            <div className='first_line_main'>
                                <div className='hori'></div>
                                <div className='Story_learning_about'>STORY</div>
                            </div>
                            <h2>My Awesome  <span style={{ color: "#09c3b3", fontWeight: "800" }}> Story</span></h2>
                            <p>I have experience designing and developing websites, web services, and online businesses, and I specialise in creating chic, contemporary solutions for clients of all sizes.</p>
                        </div>
                        <Row>

                            <Col md={4} className='Set_responsive_bio_sec'>
                                <div className='left_side_image_story'>
                                    <img alt='left_girl' src={`${process.env.PUBLIC_URL}/images/IMG_4606.jpg`}></img>
                                </div>
                            </Col>
                            <Col md={4} className='Set_responsive_bio_sec'>
                                <div className='main_up_down_section_about'>
                                    <div class="resume-row">
                                        <div class="resume-box">
                                            <div className='icon_set_about_me_sec'>
                                                <BsWallet2 className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">2008-2011</label>
                                            <span>Califonia USA</span>
                                            <h2>Holy Names University</h2>
                                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web  services and online stores.</p>
                                        </div>

                                        <div class="resume-box top_down_center_sec">
                                            <div className='icon_set_about_me_sec'>
                                                <BsWallet2 className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">2011-2014</label>
                                            <span>England</span>
                                            <h2>Oxford University</h2>
                                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web  services and online stores.</p>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className='Set_responsive_bio_sec'>
                                <div className='main_up_down_section_about_seond_one'>
                                    <div class="resume-row">
                                        <div class="resume-box">
                                            <div className='icon_set_about_me_sec'>
                                                <BsWallet2 className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">2014-2016</label>
                                            <span>Califonia USA</span>
                                            <h2>Google</h2>
                                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web  services and online stores.</p>
                                        </div>

                                        <div class="resume-box top_down_center_sec">
                                            <div className='icon_set_about_me_sec'>
                                                <BsWallet2 className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">2016-2018</label>
                                            <span>England</span>
                                            <h2>Apple</h2>
                                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web  services and online stores.</p>
                                        </div>
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
