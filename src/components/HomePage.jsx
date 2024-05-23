import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Typed from "typed.js";


export default function HomePage({onScrollToContact}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
      }, []);

    useEffect(() => {
        if (mounted) {
            console.log("test")
          const typed = new Typed(".typing", {
            strings: [
              "Influencer Marketing",
              "Email Marketing",
              "Search Engine Marketing",
              "Content Marketing",
              "Pay Per Click",
              "Marketing Strategy"
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
            showCursor: true
          });
    
          return () => {
            typed.destroy();
          };
        }
      }, [mounted]);

    return (
        <div className='landing_page_main'>
            <section className='landing_banner_start'>
                <div className='container-fluid'>
                    <div className='Start_top_section'>
                        <Container>
                            <Row className='Hello_top_sec'>
                                <Col md={7} className='Set_banner_left_side'>
                                    <div className='left_side_banner_text'>
                                        <h4>HELLO, MY NAME IS</h4>
                                        <h1>Manish verma</h1>
                                        <p className='typing_annimation'>A Expertise in <h6 className="typing"></h6></p>
                                        <Button className='all_btns' onClick={onScrollToContact}>Contact Me</Button>
                                    </div>
                                </Col>
                                <Col md={5} className='Set_banner_right_side'>
                                    <div className='banner_right_side_img'>
                                        <img alt="banner img" src={`${process.env.PUBLIC_URL}/images/manish_verma.png`}></img>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </div>

    )
}
