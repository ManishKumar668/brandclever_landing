// Counter.js

import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const Counter = () => {
  useEffect(() => {
    // This function used to create the countUp animation for business websites
    // Use the three parameters to customize it
    // Call it for every element
    // Note that there may be a small difference in the count (e.g., 100 might become 99), so check it

    let counterDelays = []; // Declare counterDelays array here

    function numCounter(tagId, maxCount, speed) {
      let initialNumber = 100;

      function counter() {
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
      }

      const counterDelay = setInterval(counter, speed);
      counterDelays.push(counterDelay); // Add the interval to the array

      function totalTime() {
        clearInterval(counterDelay);
      }

      const totalPeriod = speed * maxCount;
      setTimeout(totalTime, totalPeriod);
    }

    // Adjust the speed for both "Projects" and "Clients" counters to be the same
    const commonSpeed = 15;

    numCounter("Projects", 776, commonSpeed);
    numCounter("Clients", 475, commonSpeed);
    numCounter("Working", 1550, commonSpeed);
    numCounter("Coffee", 1250, commonSpeed);

    // Clean up the intervals when the component unmounts
    return () => {
      counterDelays.forEach(clearInterval);
      counterDelays = []; // Clear the array when component unmounts
    };
  }, []);

  return (
    <section className="counter_start_here">
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
