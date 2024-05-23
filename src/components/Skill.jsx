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
                                <div className='Story_learning_about'>SKILLS</div>
                            </div>
                            <h2>My Awesome  <span style={{ color: "#09c3b3", fontWeight: "800" }}> Skill</span></h2>
                            <p>Proficiency in SEO, PPC, content creation, social media management, email marketing, analytics, and basic graphic design is essential in digital marketing. These skills drive visibility, targeted traffic, engagement, and conversions. Marketers utilize analytics for data-driven decisions and optimize website performance for success online.
                            </p>
                        </div>
                        <Row ref={sectionRef}>
                            <Col md={4} className='Slill_responsive_set'>
                                <div className='First_message_box'>
                                    <div class="skill-left">
                                        <h3 class="font-alt">Make beauty Things With Passion.</h3>
                                        <p>My passion for digital marketing stems from the dynamic nature of the industry and the endless possibilities it offers for creativity and innovation. I am fascinated by the ability to connect with diverse audiences through various digital platforms, using data-driven strategies to create meaningful and impactful campaigns. The ever-evolving landscape of digital marketing excites me, as it presents continuous opportunities to learn, adapt, and grow.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className='Slill_responsive_set'>
                                <div className='progress_des'>
                                    <p>Inbound Marketing</p>
                                    <p>92%</p>
                                </div>
                                <ProgressBar now={progressValues.webDesign} />
                                <div className='progress_des'>
                                    <p>Searching engine marketing
                                    </p>
                                    <p>96%</p>
                                </div>
                                <ProgressBar now={progressValues.psdToHtml} />
                                <div className='progress_des'>
                                    <p>Social media marketing</p>
                                    <p>98%</p>
                                </div>
                                <ProgressBar now={progressValues.html5} />
                                <div className='progress_des'>
                                    <p>Experiential marketing</p>
                                    <p>95%</p>
                                </div>
                                <ProgressBar now={progressValues.css3} />

                            </Col>
                            <Col md={4} className='Slill_responsive_set'>
                                <div className='progress_des'>
                                    <p>Interactive marketing</p>
                                    <p>92%</p>
                                </div>
                                <ProgressBar now={progressValues.webDevelopment} />
                                <div className='progress_des'>
                                    <p>Brand marketing
                                    </p>
                                    <p>94%</p>
                                </div>
                                <ProgressBar now={progressValues.uiUxDesign} />
                                <div className='progress_des'>
                                    <p>Partner marketing</p>
                                    <p>93%</p>
                                </div>
                                <ProgressBar now={progressValues.webDevelopment} />
                                <div className='progress_des'>
                                    <p>Personalized marketing</p>
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
