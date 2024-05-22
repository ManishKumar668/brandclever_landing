import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

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
                        <ul className="social-icons">
                            <li className='footr_facebook'>
                                <a href="#">
                                <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <FaWhatsapp />
                                </a>
                            </li>
                      
                        </ul>
                        <p className="copyright">
                            © 2024 <a href="#">Manish Verma</a>. All Rights Reserved
                        </p>
                    </div>

            </footer>

        </div>
    )
}
