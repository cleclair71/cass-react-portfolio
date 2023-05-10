import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';
import { Slide } from 'react-awesome-reveal';

const ProfHeader = () => {
    return (
        <Container id="home">
            <Slide direction="left">
                <Texts>
                    <h4>
                        Hey, <span className="black">I'm</span>
                    </h4>
                    <h1 className="black">Cassie LeClair</h1>
                    <h3 className="black">Front End Web Developer</h3>
                    <p>I'm a Front End Web Developer based in the Greater Toronto Area. I have a passion for creating beautiful, responsive websites and applications. I'm currently seeking a full-time position as a Front End Web Developer.</p>
                    <button>Call me</button>
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
                <Slide direction="right">
                    <Profile>
                        <img src="https://drive.google.com/file/d/1QmFmww-15kUA8OLKPeoTw9PPBj0VQLLx/view?usp=share_link" alt="profile" />
                    </Profile>
                </Slide>
        </Container>
    );
};

export default ProfHeader;
const Container = styled.div``;
const Texts = styled.div``;
const Social = styled.div``;
const Profile = styled.div``;

