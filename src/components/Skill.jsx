import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

export default function Skill() {

    const [progressValues, setProgressValues] = useState({
        webDesign: 0,
        psdToHtml: 0,
        html5: 0,
        css3: 0,
        webDevelopment: 0,
        uiUxDesign: 0,
        wordpress: 0,
        magento: 0,
    });

    const sectionRef = useRef(null);

    const desiredValues = {
        webDesign: 92,
        psdToHtml: 84,
        html5: 88,
        css3: 95,
        webDevelopment: 92,
        uiUxDesign: 84,
        wordpress: 88,
        magento: 95,
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setProgressValues(desiredValues);
                observer.disconnect();
            }
        }, { threshold: 0.5 }); // Adjust threshold as needed

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div>

            <section className='progress_bar_section about_story padding_top_down'>
                <Container>
                    <div className='about_us_section_main_start'>
                        <div className='top_text_about'>
                            <div className='first_line_main'>
                                <div className='hori'></div>
                                <div className='Story_learning_about'>STORY</div>
                            </div>
                            <h2>My Awesome  <span style={{ color: "#09c3b3", fontWeight: "800" }}> Story</span></h2>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                        </div>
                        <Row ref={sectionRef}>
                            <Col md={4}>
                                <div className='First_message_box'>
                                    <div class="skill-left">
                                        <h3 class="font-alt">Make beauty Things With Passion.</h3>
                                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='progress_des'>
                                    <p>WEB DESIGN</p>
                                    <p>92%</p>
                                </div>
                                <ProgressBar now={progressValues.webDesign} />
                                <div className='progress_des'>
                                    <p>PSD TO HTML</p>
                                    <p>84%</p>
                                </div>
                                <ProgressBar now={progressValues.psdToHtml} />
                                <div className='progress_des'>
                                    <p>HTML5</p>
                                    <p>88%</p>
                                </div>
                                <ProgressBar now={progressValues.html5} />
                                <div className='progress_des'>
                                    <p>CSS3</p>
                                    <p>95%</p>
                                </div>
                                <ProgressBar now={progressValues.css3} />

                            </Col>
                            <Col md={4}>
                                <div className='progress_des'>
                                    <p>WEB DEVELOPMENT</p>
                                    <p>92%</p>
                                </div>
                                <ProgressBar now={progressValues.webDevelopment} />
                                <div className='progress_des'>
                                    <p>UI/UX DESIGN</p>
                                    <p>84%</p>
                                </div>
                                <ProgressBar now={progressValues.uiUxDesign} />
                                <div className='progress_des'>
                                    <p>WORDPRESS</p>
                                    <p>88%</p>
                                </div>
                                <ProgressBar now={progressValues.webDevelopment} />
                                <div className='progress_des'>
                                    <p>MAGENTO</p>
                                    <p>95%</p>
                                </div>
                                <ProgressBar now={progressValues.magento} />

                            </Col>

                        </Row>


                    </div>

                </Container>
            </section>


        </div>
    )
}
