import React from 'react'
import { Nav } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-logo">
                        <span>
                            Manish Verma <span />
                        </span>
                    </div>
                </div>
                <ul className="social-icons">
                    <li>
                        <Nav.Link href="https://www.upwork.com/freelancers/~01d672b038a81f6f0f" target='_blank'>
                            <FaUpwork />
                        </Nav.Link>
                    </li>
                    <li className='footr_facebook'>
                        <Nav.Link href="https://www.facebook.com/people/Manish-Verma/pfbid0YV2V8eNSm6nZisqjVAHWhwLncELXDzSTUR23SDHf6H3HpGHKCPT4FBp6WGR6xMevl/" target='_blank'>
                            <FaFacebookF />
                        </Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="https://www.linkedin.com/in/manish-verma-brandcleverdotin/?original_referer=" target="_blank">
                            <FaLinkedinIn />
                        </Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="https://www.instagram.com/maniflix/" target="_blank">
                            <FaInstagram />
                        </Nav.Link>
                    </li>

                    <li>
                        <Nav.Link href="https://wa.me/9877268100" target="_blank">
                            <FaWhatsapp />
                        </Nav.Link>
                    </li>

                </ul>
                <p className="copyright">
                    © 2024 <a href="#">Manish Verma</a>. All Rights Reserved
                </p>

            </footer>

        </div>
    )
}
