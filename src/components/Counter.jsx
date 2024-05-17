// Counter.js

import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";

const Counter = () => {

  const counterSectionRef = useRef(null);
  let counterDelays = [];

  useEffect(() => {
    function numCounter(tagId, maxCount, speed) {
      let initialNumber = 0;

      function counter() {
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
        if (initialNumber > maxCount) {
          clearInterval(counterDelay);
        }
      }

      const counterDelay = setInterval(counter, speed);
      counterDelays.push(counterDelay);
    }

    // Adjust the speed for both "Projects" and "Clients" counters to be the same
    const commonSpeed = 15;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          numCounter("Projects", 776, commonSpeed);
          numCounter("Clients", 475, commonSpeed);
          numCounter("Working", 1550, commonSpeed);
          numCounter("Coffee", 1250, commonSpeed);

          // Disconnect observer after starting the counters
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Adjust this value to control when the counters start
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    // Clean up the intervals when the component unmounts
    return () => {
      counterDelays.forEach(clearInterval);
      counterDelays = [];
      observer.disconnect();
    };
  }, []);
  return (
    <section className="counter_start_here" ref={counterSectionRef}>
      <Container>

        <Row className="counter-section">
          <div className="top-counter">
            <div className="column">
              <div className="card-counter">
                <h3>
                  <span id="Projects" className="counter_number">0</span>
                </h3>
                <h6>FINISHED PROJECTS</h6>
              </div>
            </div>
            <div className="column">
              <div className="card-counter">
                <h3>
                  <span id="Clients" className="counter_number">0</span>
                </h3>
                <h6>HAPPY CUSTOMERS</h6>
              </div>
            </div>
            <div className="column">
              <div className="card-counter">
                <h3>
                  <span id="Working" className="counter_number">0</span>
                </h3>
                <h6>WORKING HOURS</h6>
              </div>
            </div>
            <div className="column">
              <div className="card-counter">
                <h3>
                  <span id="Coffee" className="counter_number">0</span>
                </h3>
                <h6>COFFEE CUPS</h6>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>


  );
};

export default Counter;
