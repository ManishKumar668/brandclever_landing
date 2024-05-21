import React from 'react'
import { Container } from 'react-bootstrap'

export default function Blog() {
    return (
        <div>

            <section className='about_story padding_top_down slider_section blog_sec'>
                <Container>
                    <div className='about_us_section_main_start'>
                        <div className='top_text_about'>
                            <div className='first_line_main'>
                                <div className='hori'></div>
                                <div className='Story_learning_about'>NEWS</div>
                            </div>
                            <h2>Latest <span style={{ color: "#09c3b3", fontWeight: "800" }}> Blogs</span></h2>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                            </p>
                        </div>
                    </div>
                    <div className='blog_main_section'>
                        <div className="row">
                            <div className="col-md-4 set_blogs_responsive">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="https://pxdraft.com/themeforest/keira/keira/static/img/blog-img2.jpg" title="" alt="" />
                                        </a>
                                        <div className="post-meta">
                                            By <a href="">John Doe</a> <span>03.02.2018</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="font-alt">
                                            <a href="#">Top 20 HTML Websites.</a>
                                        </h4>
                                        <p>
                                            I design and develop services for customers of all sizes, specializing
                                            in creating stylish, modern websites, web services and online stores and digital marketing.
                                        </p>
                                        <a className="theme-bg more" href="#">
                                            Read More
                                        </a>
                                    </div>
                                    {/* /blog-content */}
                                </div>{" "}
                                {/* Blog Item */}
                            </div>
                            <div className="col-md-4 set_blogs_responsive">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="https://pxdraft.com/themeforest/keira/keira/static/img/blog-img4.jpg" title="" alt="" />
                                        </a>
                                        <div className="post-meta">
                                            By <a href="">John Doe</a> <span>03.02.2018</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="font-alt">
                                            <a href="#">Easy way to create website.</a>
                                        </h4>
                                        <p>
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse.
                                        </p>
                                        <a className="theme-bg more" href="#">
                                            Read More
                                        </a>
                                    </div>
                                    {/* /blog-content */}
                                </div>{" "}
                                {/* Blog Item */}
                            </div>
                            <div className="col-md-4  set_blogs_responsive">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="https://pxdraft.com/themeforest/keira/keira/static/img/blog-img3.jpg" title="" alt="" />
                                        </a>
                                        <div className="post-meta">
                                            By <a href="">John Doe</a> <span>03.02.2018</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="font-alt">
                                            <a href="#">Log in to your hosting account.</a>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam.
                                        </p>
                                        <a className="theme-bg more" href="#">
                                            Read More
                                        </a>
                                    </div>
                                    {/* /blog-content */}
                                </div>{" "}
                                {/* Blog Item */}
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </div>
    )
}
