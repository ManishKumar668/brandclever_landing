import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Nav } from 'react-bootstrap'
import { CgMail } from 'react-icons/cg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa6'
import { toast } from 'react-toastify'

export default function ContactForm({ contactSectionRef }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    })
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = async () => {
        try {
            const res = await axios.post('https://developer.brandclever.in/brand/admin/form/mail.php', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("resss", res)
        } catch (error) {

        }
    }


    const handlSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) {
            toast.error("Name is Required!");
            return;
        }
        if (!formData.email) {
            toast.error("Email is Required!");
            return;
        }
        if (!emailRegex.test(formData.email)) {
            toast.error("Email is not valid!");
            return
        }
        if (!formData.message) {
            toast.error("Message Field is Required!");
            return;
        }

        console.log("formData", formData)

        try {
            const res = await axios.post('https://developer.brandclever.in/brand/admin/form/landing_page_data.php', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.data.status) {
                toast.success("Data submited successfully!")
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    message: ""
                })

                return;
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Error in submit data")
        }
    }

    return (
        <div>
            {/* <Button onClick={sendEmail}>send</Button> */}
            <section className='about_story padding_top_down slider_section client_review' ref={contactSectionRef}>
                <Container >
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
                                        <Nav.Link href='mailto:manishdoraha1@gmail.com'><span>manishdoraha1@gmail.com</span></Nav.Link>
                                    </div>
                                    <div className="ci-row">
                                        <CgMail />
                                        <label>For Support</label>
                                        <Nav.Link href='mailto:shobha.brandclever@gmail.com'><span>shobha.brandclever@gmail.com</span></Nav.Link>
                                    </div>
                                    <div className="ci-row">
                                        <FaMobileScreen />
                                        <label>Talk with us</label>
                                        <Nav.Link href='tel:+919872711866'><span>+91-98772 68100</span></Nav.Link>
                                    </div>
                                    <div className="ci-row">
                                        <FaMapMarkerAlt />
                                        <label>Address</label>
                                        <Nav.Link href='https://www.google.com/maps/place/Brandclever/@30.711095,76.6900641,17z/data=!3m1!4b1!4m6!3m5!1s0x390fef8cd36051e7:0xdfdada19c12e600f!8m2!3d30.711095!4d76.6900641!16s%2Fg%2F11rc28htlw?entry=ttu' target='_blank'>
                                            <span>
                                                4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055
                                            </span>
                                        </Nav.Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="contact-form">
                                    <h2>Say Something</h2>
                                    <form onSubmit={handlSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        name="name"
                                                        placeholder="Name *"
                                                        className="form-control"
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData.name}
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        name="email"
                                                        placeholder="Email *"
                                                        className="form-control"
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData.email}
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        name="number"
                                                        placeholder="Number"
                                                        className="form-control"
                                                        type="number"
                                                        onChange={handleChange}
                                                        value={formData.number}
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message *"
                                                        rows={3}
                                                        className="form-control"
                                                        defaultValue={""}
                                                        onChange={handleChange}
                                                        value={formData.message}
                                                    />
                                                    <span className="input-focus-effect" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="send">
                                                    <button className="m-btn m-btn-theme" type='submit'>
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
