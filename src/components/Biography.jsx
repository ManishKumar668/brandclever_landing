import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsWallet2 } from 'react-icons/bs'
import { SiCoinmarketcap, SiMarketo } from 'react-icons/si'
import { TbBrandWalmart, TbCirclesRelation } from 'react-icons/tb'

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
                            <p>With over 15 years in marketing, I specialize in B2B and B2C client management. My expertise spans strategic planning, lead generation, and campaign execution. In B2B, I forge partnerships and drive lead generation initiatives. In B2C, I craft compelling messages and engage with consumers across channels. I prioritize client satisfaction through transparent communication and tailored strategies.</p>
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
                                                
                                                <SiMarketo className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">B2B Marketing</label>
                                            {/* <span>B2B marketing</span> */}
                                            {/* <h2>Holy Names University</h2> */}
                                            <p>B2B marketing stands for "business to business." This means that the company's target audience is another company. B2B marketing typically requires a much longer buying cycle.</p>
                                        </div>

                                        <div class="resume-box top_down_center_sec">
                                            <div className='icon_set_about_me_sec'>
                                                <SiCoinmarketcap className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">B2C Marketing</label>
                                            {/* <span>England</span>
                                            <h2>Oxford University</h2> */}
                                            <p>B2C marketing stands for "business to consumer." This means that the target audience is a direct consumer of the product or service.Depending on the type of product.</p>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className='Set_responsive_bio_sec'>
                                <div className='main_up_down_section_about_seond_one'>
                                    <div class="resume-row">
                                        <div class="resume-box">
                                            <div className='icon_set_about_me_sec'>
                                                <TbCirclesRelation  className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">Public relations (PR) marketing</label>
                                            {/* <span>Califonia USA</span>
                                            <h2>Google</h2> */}
                                            <p>PR marketing is a strategy where you partner with a news source to generate more buzz around your business. PR marketing is commonly used when a company. </p>
                                        </div>

                                        <div class="resume-box top_down_center_sec">
                                            <div className='icon_set_about_me_sec'>
                                                <TbBrandWalmart className='resume_icn_story' />
                                            </div>
                                            <label class="theme-bg theme-color">Brand marketing
                                            </label>
                                            {/* <span>England</span>
                                            <h2>Apple</h2> */}
                                            <p>Brand marketing is a long-term form of marketing in which the goal is to become recognizable and establish a good reputation. Brand marketing encompasses many different facets.</p>
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
