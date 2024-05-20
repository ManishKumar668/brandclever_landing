import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../data/ClientReview.json"

export default function ClientReview() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
            <section className='about_story padding_top_down slider_section client_review'>
                <Container>
                    <div className='about_us_section_main_start'>
                        <div className='top_text_about'>
                            <div className='first_line_main'>
                                <div className='hori'></div>
                                <div className='Story_learning_about'>TESTIMONIAL</div>
                            </div>
                            <h2>What People  <span style={{ color: "#09c3b3", fontWeight: "800" }}> Say?</span></h2>
                            <p>I offer customized design and development services for businesses of all sizes. My expertise lies in crafting elegant, modern websites, web applications, and online stores that meet your unique needs and elevate your digital presence.
                            </p>
                        </div>
                    </div>
                    <div className='slide_parent'>
                        <Slider {...settings}>
                            {
                                reviews.data.slice(0, 10).map((ele, key) => {
                                    return (
                                        <div className='clien_review' key={key}>
                                            <div className='client_reviews_main'>
                                                <div className='top_img_set_slide_client_rewiew'>
                                                    <div className='flex_client_reviews_top'>
                                                    <img src={ele.image} alt={ele.name} height="100px" width="100px" />
                                                    <div className='name_count'>
                                                        <p className="name">{ele.   name}</p>
                                                        <p className="country"> {ele.country}</p>
                                                    </div>
                                                    </div>
                                                    <p>{ele.review.substring(0,200)}...</p>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>

                </Container>
            </section>
        </div>
    )
}
