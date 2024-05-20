import React from 'react'
import { Container } from 'react-bootstrap'
import { CgMail } from 'react-icons/cg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa6'

export default function ContactForm() {
    return (
        <div>
            <section className='about_story padding_top_down slider_section client_review'>
                <Container>
                    <div className='about_us_section_main_start'>
                        <div className='top_text_about'>
                            <div className='first_line_main'>
                                <div className='hori'></div>
                                <div className='Story_learning_about'>GET IN TOUCH</div>
                            </div>
                            <h2>Contact   <span style={{ color: "#09c3b3", fontWeight: "800" }}> Details</span></h2>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                            </p>
                        </div>
                    </div>
                    <div className='form_conact_main_start'>
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                            <div className="contact-info">
                                        <div className="ci-row">
                                            <CgMail />
                                            <label>For Information</label>
                                            <span>info@domain.com</span>
                                        </div>
                                        <div className="ci-row">
                                            <CgMail />
                                            <label>For Support</label>
                                            <span>info@domain.com</span>
                                        </div>
                                        <div className="ci-row">
                                            <FaMobileScreen />
                                            <label>Talk with us</label>
                                            <span>1800 108 5252</span>
                                        </div>
                                        <div className="ci-row">
                                            <FaMapMarkerAlt />
                                            <label>Address</label>
                                            <span>
                                                301 The Greenhouse,
                                                <br /> London, E2 8DY.
                                            </span>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="contact-form">
                                    <h2>Say Something</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        name="Phone"
                                                        placeholder="Name"
                                                        className="form-control"
                                                        type="text"
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        name="Email"
                                                        placeholder="Emaile"
                                                        className="form-control"
                                                        type="email"
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        name="Subject"
                                                        placeholder="Subject"
                                                        className="form-control"
                                                        type="text"
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="comment"
                                                        placeholder="Describe your project"
                                                        rows={3}
                                                        className="form-control"
                                                        defaultValue={""}
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="send">
                                                    <button className="m-btn m-btn-theme">
                                                        <i className="fa fa-envelope-o" aria-hidden="true" />
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </div>
    )
}
