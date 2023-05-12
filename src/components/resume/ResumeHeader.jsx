import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineDownload } from 'react-icons/ai';
import { Slide } from 'react-awesome-reveal';

const ResumeHeader = () => {
    return (
        <Container id="home">
            <Slide direction="left">
                <Texts>
                <h1 className="red">I'm Cassie LeClair.</h1>
                    <p>I'm a Front End Web Developer based in the Greater Toronto Area. I have a passion for creating beautiful, responsive websites and applications. I'm currently seeking a full-time position as a Front End Web Developer.</p>
                    <Buttons>
                        <button>Contact</button>
                        <button>
                            Resume <AiOutlineDownload />
                        </button>
                    </Buttons>
                    <Social>
                        <p>Check out my</p>
                        <div className="social-icons">
                            <span>
                                <a href="/">
                                    <AiOutlineGithub />
                                </a>
                            </span>
                            <span>
                                <a href="/">
                                    <AiOutlineLinkedin />
                                </a>
                            </span>
                        </div>
                    </Social>
                </Texts>
            </Slide>
        </Container>
    );
};
    
export default ResumeHeader;

const Container = styled.div``;
const Texts = styled.div``;
const Buttons = styled.div``;