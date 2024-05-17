import React from 'react'
import { Container } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { HiMiniPlay } from 'react-icons/hi2';
import { MdFullscreen } from 'react-icons/md';
import { FaLink } from 'react-icons/fa';


export default function WorkFlow() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    return (
        <div>
            <section className='about_story padding_top_down slider_section'>
                <Container>
                    <div className='about_us_section_main_start'>
                        <div className='top_text_about'>
                            <div className='first_line_main'>
                                <div className='hori'></div>
                                <div className='Story_learning_about'>Work</div>
                            </div>
                            <h2>My Awesome  <span style={{ color: "#09c3b3", fontWeight: "800" }}> Work</span></h2>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                        </div>
                    </div>
                    <div className='slide_parent'>
                        <Slider {...settings}>
                            <div className='slider_border_set_sec'>
                                <div className='slider_main_work_sec'>
                                    <div className='top_img_set_slide'>
                                        <div className='image_up_icn_set'>
                                            <span> <HiMiniPlay />  </span>
                                            <span><MdFullscreen />  </span>
                                            <span> <FaLink />  </span>
                                        </div>
                                    </div>
                                    <div class="portfolio-info">
                                        <h5>Illustrator Work</h5>
                                        <span class="theme-after theme-color">Resent Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_border_set_sec'>
                                <div className='slider_main_work_sec'>
                                    <div className='top_img_set_slide seond_img'>
                                        <div className='image_up_icn_set'>
                                            <span> <HiMiniPlay />  </span>
                                            <span><MdFullscreen />  </span>
                                            <span> <FaLink />  </span>
                                        </div>
                                    </div>
                                    <div class="portfolio-info">
                                        <h5>Illustrator Work</h5>
                                        <span class="theme-after theme-color">Resent Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_border_set_sec'>
                                <div className='slider_main_work_sec'>
                                    <div className='top_img_set_slide'>
                                        <div className='image_up_icn_set'>
                                            <span> <HiMiniPlay />  </span>
                                            <span><MdFullscreen />  </span>
                                            <span> <FaLink />  </span>
                                        </div>
                                    </div>
                                    <div class="portfolio-info">
                                        <h5>Illustrator Work</h5>
                                        <span class="theme-after theme-color">Resent Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_border_set_sec'>
                                <div className='slider_main_work_sec'>
                                    <div className='top_img_set_slide'>
                                        <div className='image_up_icn_set'>
                                            <span> <HiMiniPlay />  </span>
                                            <span><MdFullscreen />  </span>
                                            <span> <FaLink />  </span>
                                        </div>
                                    </div>
                                    <div class="portfolio-info">
                                        <h5>Illustrator Work</h5>
                                        <span class="theme-after theme-color">Resent Work</span>
                                    </div>
                                </div>
                            </div>

                          

                         








                        </Slider>
                    </div>
                </Container>
            </section>
        </div>
    )
}
