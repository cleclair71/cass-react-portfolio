import React from 'react'
import styled from 'styled-components';
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { Form } from 'react-router-dom';

const Footer = () => {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Container id="footer">
            <Profile>
                <Slide direction="left" delay={1}>
                    <h1>Portfolio</h1>
                </Slide>
                <div className="address">
                    <Slide direction="left">
                        <h1>Address:</h1>
                    </Slide>
                    <Slide direction="left"><p>location</p></Slide>
                </div>
                <div className="links">
                    <Slide direction="left">
                        <h1>Contact me directly:</h1>
                    </Slide>
                    <div>
                        <span>
                            <FiPhoneCall />
                        </span>
                        <Slide direction="left">
                            <a href="tel:">+1 (555) 555-5555</a>
                        </Slide>
                    </div>
                    <div>
                        <Slide direction="left">
                            <span>
                                <HiOutlineMailOpen />
                            </span>
                        </Slide>
                        <Slide>
                            <a href="mailto:">mail</a>
                        </Slide>
                    </div>
                </div>
                <div className="profiles">
                    <Slide direction="left">
                        <h1>my profiles</h1>
                    </Slide>
                    <div className="icons">
                        <Zoom>
                            <span>
                                <a href="/">
                                    <AiFillGithub />
                                </a>
                            </span>
                        </Zoom>
                        <Zoom>
                            <span>
                                <a href="/">
                                    <AiFillLinkedin />
                                </a>
                            </span>
                        </Zoom>

                    </div>
                </div>
                <Fade>
                    <ArrowUp onClick={scrollUp}>
                        <AiOutlineArrowUp />
                    </ArrowUp>
                </Fade>
            </Profile>
            <Form>
                <Slide direction="right">
                    <form>
                        <div className="name">
                            <span>
                                <CgProfile />
                            </span>
                            <input type="text" placeholder="Fullname..." />
                        </div>
                        <div className="email">
                            <span>
                                <MdAlternateEmail />
                            </span>
                            <input type="email" placeholder="Email..." />
                        </div>
                        <div className="message">
                            <span className="messageIcon">
                                <FiMail />
                            </span>
                            <textarea cols="30" rows="10" placeholder="Message..."></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </Slide>
            </Form>
        </Container >
    );
};

export default Footer;

const Container = styled.div``;

