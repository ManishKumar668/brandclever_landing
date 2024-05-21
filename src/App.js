
import { useRef } from 'react';
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

function App() {

  const contactSectionRef = useRef(null);

  const handleScrollToContact = () => {
    const target = contactSectionRef.current;

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
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
    </div>
  );
}

export default App;
