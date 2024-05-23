
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

function App() {

  const contactSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToContact = () => {
    const target = contactSectionRef.current;
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
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

  useEffect(() => {
    window.addEventListener('scroll', scrollToTop);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, []);

  return (
    <div>
      <ToastContainer position="top-right" />
      <HomePage onScrollToContact={handleScrollToContact} />
      <About />
      <Counter />
      <Biography />
      <Skill />
      <WorkFlow />
      <ClientReview />
      <Blog />
      <PriceList />
      <ContactForm contactSectionRef={contactSectionRef} />
      <Footer />

      <Button className='up_arrow_btn' style={{ display: isVisible ? 'block' : 'none' }} onClick={handleScollTop}>
        <FaArrowCircleUp />
      </Button>
    </div>
  );
}

export default App;
