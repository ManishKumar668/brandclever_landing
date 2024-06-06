import React from 'react'
import { Nav } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'

const threenintyPlan = [
  'Keyword research',
  "Website Audit",
  "Customer research",
  "Market and competitor research",
  "Website health and SEO audit with traffic and backlink analysis",
  "Link building (internal, inbound and outbound)",
  "Up to 175 keywords",
  "SWOT analysis",
  "Website technical optimisation",
  "On page and off page optimisation",
]

const threeNintySocialplan = [
  'Customer research',
  "Content research",
  "3x posts Per Week + unique graphic design",
  "Stock photos provided",
  "Creative development",
  "Competitor research",
  "SWOT analysis",
  "Monthly Analytics And Progress Tracking",
  "Market and competitor research",
  "Develop brand voice",
]

const fourNintySocialplan = [
  'Customer research',
  "Content research",
  "Products and services keywords research",
  "SWOT analysis",
  "Creative development",
  "Extensive ads A/B testing",
  "Monitoring and optimisation",
  "Content Creations",
  "Monthly Analytics And Progress Tracking",
  "Extensive Content Creation And Marketing",
]

export default function () {


  const handleClick = (title) => {
    const email = 'manishdoraha1@gmail.com';
    const subject = encodeURIComponent(`${title} Plan`);
    const body = encodeURIComponent(`I go for ${title} plan`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };


  return (
    <div>
      <section className='pricing_sec'>
        <div className="pricing-area over-hidden secondary-bg pt-155 pb-140">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                <div className="title text-center">
                  <span className="theme-color f-700 d-block mb-6">
                    Let’s Start Working
                  </span>
                  <h3>Choose the best pricing plan for your next business</h3>
                </div>
                {/* /title */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="row pricie-wrapper justify-content-center mt-80">
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 aos-init"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration={1200}
              >
                <div className="single-price white-bg shadow-hover transition3 border-radius12 pl-45 pr-45 pt-45 pb-50 mb-30">
                  <h4 className="theme-border-bottom pb-25">Seo</h4>
                  <h6 className="mt-20 mb-20">
                    <span className="theme-color rate pr-12">$399</span>/ Per Monthly
                  </h6>
                  <ul className="price-list">
                    {threenintyPlan.map((ele, key) => {
                      return (
                        <li className="d-flex align-items-center" key={key}>
                          <span className="theme-color d-inline-block text-center">
                            <FaCheck />
                          </span>
                          <p className="mb-0 ml-20">{ele}</p>
                        </li>
                      )
                    })}
                  </ul>
                  <Nav.Link
                    onClick={()=>handleClick("seo")}
                    href=""
                    className="btn position-relative over-hidden text-white theme-bg text-white text-capitalize mt-25"
                  >
                    Get Start
                  </Nav.Link>
                </div>
                {/* / */}
              </div>
              {/* /col */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 aos-init"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration={1400}
              >
                <div className="single-price white-bg shadow-hover transition3 border-radius12 pl-45 pr-45 pt-45 pb-50 mb-30">
                  <h4 className="theme-border-bottom pb-25">Social Media</h4>
                  <h6 className="mt-20 mb-20">
                    <span className="theme-color rate pr-12">$399</span>/ Per Monthly
                  </h6>
                  <ul className="price-list">
                    {
                      threeNintySocialplan.map((ele, key) => {
                        return (
                          <li className="d-flex align-items-center" key={key}>
                            <span className="theme-color d-inline-block text-center">
                              <FaCheck />
                            </span>
                            <p className="mb-0 ml-20">{ele}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <Nav.Link
                    onClick={()=>handleClick("social media")}
                    href=""
                    className="btn position-relative over-hidden text-white theme-bg text-white text-capitalize mt-25"
                  >
                    Get Start
                  </Nav.Link>
                </div>
                {/* / */}
              </div>
              {/* /col */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 aos-init"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration={1600}
              >
                <div className="single-price white-bg shadow-hover transition3 border-radius12 pl-45 pr-45 pt-45 pb-50 mb-30">
                  <h4 className="theme-border-bottom pb-25">PPC</h4>
                  <h6 className="mt-20 mb-20">
                    <span className="theme-color rate pr-12">$499</span>/ Per Monthly
                  </h6>
                  <ul className="price-list">
                    {fourNintySocialplan.map((ele, key) => {
                      return (

                        <li className="d-flex align-items-center" key={key}>
                          <span className="theme-color d-inline-block text-center">
                            <FaCheck />
                          </span>
                          <p className="mb-0 ml-20">{ele}</p>
                        </li>
                      )
                    })}

                  </ul>
                  <Nav.Link
                    onClick={()=>handleClick("PPC")}
                    href=""
                    className="btn position-relative over-hidden text-white theme-bg text-white text-capitalize mt-25"
                  >
                    Get Start
                  </Nav.Link>
                </div>
                {/* / */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>

      </section>

    </div>
  )
}
