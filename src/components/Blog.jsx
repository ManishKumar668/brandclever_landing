import React from 'react'
import { Container } from 'react-bootstrap';
import blogs from '../data/Blog.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Blog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <section className='about_story padding_top_down slider_section blog_sec'>
                <Container>
                    <div className='about_us_section_main_start'>
                        <div className='top_text_about'>
                            <div className='first_line_main'>
                                <div className='hori'></div>
                                <div className='Story_learning_about'>NEWS</div>
                            </div>
                            <h2>Latest <span className='sub_title'> Blogs</span></h2>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                            </p>
                        </div>
                    </div>
                    <div className='blog_main_section'>
                        <div className="row">
                            <Slider {...settings}>
                                {
                                    blogs.data.map((ele, key) => {
                                        return (
                                            <div className="col-md-4 set_blogs_responsive">
                                                <div className="blog-item">
                                                    <div className="blog-img">
                                                        <a href="#">
                                                            <img src={ele.image} title="" alt={ele.title1} className='blog_img'/>
                                                        </a>

                                                    </div>
                                                    <div className="blog-content">
                                                        <h4 className="font-alt">
                                                            <a href="#">{ele.title1}</a>
                                                        </h4>
                                                        <p>
                                                            {ele.introduction.substring(0, 180)}...
                                                        </p>
                                                        <a className="theme-bg more" href="#">
                                                            Read More
                                                        </a>
                                                    </div>
                                                    {/* /blog-content */}
                                                </div>{" "}
                                                {/* Blog Item */}
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>

                    </div>
                </Container>
            </section>
        </div>
    )
}
