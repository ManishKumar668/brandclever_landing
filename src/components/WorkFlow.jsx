import React, { useState } from 'react'
import { Container, Modal, Button, Nav } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { HiMiniPlay } from 'react-icons/hi2';
import { MdFullscreen } from 'react-icons/md';
import { FaCaretLeft, FaCaretRight, FaLink } from 'react-icons/fa';
import work from '../data/project.json'


export default function WorkFlow() {
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
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

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setCurrentIndex(index);
        setCurrentImage(work.data[index].image); // Assuming each `ele` has an `image` property
        setShow(true);
    };

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % work.data.length;
        setCurrentIndex(nextIndex);
        setCurrentImage(work.data[nextIndex].image);
    };

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + work.data.length) % work.data.length;
        setCurrentIndex(prevIndex);
        setCurrentImage(work.data[prevIndex].image);
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
                            <h2>My Awesome  <span className='sub_title'> Work</span></h2>
                            <p>At My Awesome Work, our digital marketing process is designed to elevate your brand and drive engagement. Here's a snapshot of our approach:
                            </p>
                        </div>
                    </div>
                    <div className='slide_parent'>
                        <Slider {...settings}>
                            {
                                work.data.map((ele, key) => {
                                    return (
                                        <div className='slider_border_set_sec' key={key}>
                                            <div className='slider_main_work_sec'>
                                                <div className='top_img_set_slide'>
                                                    <div className='project_img'>
                                                        <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.image} />
                                                    </div>
                                                    <div className='image_up_icn_set'>
                                                        {/* <span> <HiMiniPlay />  </span> */}
                                                        <span onClick={() => handleShow(key)}><MdFullscreen />  </span>
                                                        <span> <Nav.Link href={ele.link} target="_blank"><FaLink /> </Nav.Link>  </span>
                                                    </div>
                                                </div>
                                                <div class="portfolio-info">
                                                    <h5>{ele.title}</h5>
                                                    <span class="theme-after theme-color">Resent Work</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>
                    <Modal show={show} onHide={handleClose} centered size="lg" className="custom-modal">
                        <Modal.Header closeButton>

                        </Modal.Header>
                        <Modal.Body className="text-center">
                            <img src={currentImage} alt="Current Work" className="img-fluid" />
                            <Button variant="secondary" className="prev-button" onClick={prevImage}><FaCaretLeft /></Button>
                            <Button variant="secondary" className="next-button" onClick={nextImage}><FaCaretRight /></Button>
                        </Modal.Body>
                    </Modal>
                </Container>
            </section>
        </div>
    )
}
