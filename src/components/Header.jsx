import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { IoMenu } from 'react-icons/io5';

export default function Header({ onScrollToSection, activeMenuItem, sectionRefs }) {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (section, menuItem) => {
        onScrollToSection(sectionRefs[section], menuItem);
        setMenuOpen(false);
    };


    return (
        <div>
            <header>
                <nav className={`navbar header-nav-01 ${scrolled ? 'scrolled' : 'transparent'} fixed-top navbar-expand-lg`}>
                    <div className="container">
                        <Nav.Link className="navbar-brand" href="">Manish <span className="theme-bg"></span></Nav.Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            aria-controls="navbarKeira"
                            aria-expanded={menuOpen}
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >
                            <IoMenu />
                        </button>

                        <div className={`navbar-collapse justify-content-end ${menuOpen ? 'show' : 'collapse'}`} id="navbarKeira">
                            <ul className="navbar-nav ml-auto">
                                <li><Nav.Link className={`nav-link ${activeMenuItem === 'home' ? 'active' : ''}`} href="" onClick={() => handleMenuClick('home', 'home')}>Home</Nav.Link></li>
                                <li><Nav.Link className={`nav-link ${activeMenuItem === 'about' ? 'active' : ''}`} href="" onClick={() => handleMenuClick('about', 'about')}>About Us</Nav.Link></li>
                                <li><Nav.Link className={`nav-link ${activeMenuItem === 'resume' ? 'active' : ''}`} href="" onClick={() => handleMenuClick('resume', 'resume')}>Resume</Nav.Link></li>
                                <li><Nav.Link className={`nav-link ${activeMenuItem === 'portfolio' ? 'active' : ''}`} href="" onClick={() => handleMenuClick('portfolio', 'portfolio')}>Portfolio</Nav.Link></li>
                                <li><Nav.Link className={`nav-link ${activeMenuItem === 'blog' ? 'active' : ''}`} href="" onClick={() => handleMenuClick('blog', 'blog')}>Blog</Nav.Link></li>
                                <li><Nav.Link className={`nav-link ${activeMenuItem === 'contact' ? 'active' : ''}`} href="" onClick={() => handleMenuClick('contact', 'contact')}>Contact</Nav.Link></li>
                            </ul>
                        </div>


                    </div>
                </nav>
            </header>
        </div>
    )
}
