
import { useEffect, useRef, useState } from 'react';
import './index.css';
import './responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Counter from './components/Counter';
import Biography from './components/Biography';
import Skill from './components/Skill';
import WorkFlow from './components/WorkFlow';
import ClientReview from './components/ClientReview';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PriceList from './components/PriceList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';
import Header from './components/Header';

function App() {

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const resumeSectionRef = useRef(null);
  const portfolioSectionRef = useRef(null);
  const blogSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const handleScrollToSection = (sectionRef, menuItem) => {
    const target = sectionRef.current;
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for fixed header height
        behavior: 'smooth'
      });
      setActiveMenuItem(menuItem);
    }
  };


  const handleScollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }

  const scrollToTop = () => {
    // Check if user has scrolled down by at least 100px
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    const sections = [
      { ref: homeSectionRef, name: 'home' },
      { ref: aboutSectionRef, name: 'about' },
      { ref: resumeSectionRef, name: 'resume' },
      { ref: portfolioSectionRef, name: 'portfolio' },
      { ref: blogSectionRef, name: 'blog' },
      { ref: contactSectionRef, name: 'contact' }
    ];

    const offsetTop = window.pageYOffset + 80;

    for (let section of sections) {
      if (section.ref.current.offsetTop <= offsetTop &&
        section.ref.current.offsetTop + section.ref.current.offsetHeight > offsetTop) {
        setActiveMenuItem(section.name);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', scrollToTop);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div>
      <Header
        onScrollToSection={handleScrollToSection}
        activeMenuItem={activeMenuItem}
        sectionRefs={{
          home: homeSectionRef,
          about: aboutSectionRef,
          resume: resumeSectionRef,
          portfolio: portfolioSectionRef,
          blog: blogSectionRef,
          contact: contactSectionRef
        }}
      />
      <ToastContainer position="top-right" />
      <div ref={homeSectionRef}>
        <HomePage onScrollToContact={() => handleScrollToSection(contactSectionRef, 'contact')} />
      </div>
      <div ref={aboutSectionRef}>
        <About />
      </div>
      <Counter />
      <div ref={resumeSectionRef}>
        <Biography />
      </div>
      <Skill />
      <div ref={portfolioSectionRef}>
        <WorkFlow />
      </div>
      <ClientReview />
      <div ref={blogSectionRef}>
        <Blog />
      </div>
      <PriceList />
      <div ref={contactSectionRef}>
        <ContactForm />
      </div>
      <Footer />
      <Button className='up_arrow_btn' style={{ display: isVisible ? 'block' : 'none' }} onClick={handleScollTop}>
        <FaArrowCircleUp />
      </Button>
    </div>
  );
}

export default App;
