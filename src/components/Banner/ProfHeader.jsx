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
                        hey, <span className="black">i'm</span>
                    </h4>
                    <h1 className="black">cassie leclair</h1>
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
const Container = styled.div`
    
    display: flex;
    padding-top: 3.2rem;
    gap: 2rem;
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    @media (max-width: 840px) {
        width: 90%;
    }
    @media (max-width: 640px) {
        flex-direction: column;
    }`;
const Texts = styled.div`
flex: 1;
h4 {
    font-weight: 400;
    padding: 0.4rem 0;
    font-family: 'Just Me Again Down Here', cursive;
    font-size: 1.8rem;
}
h1 {
    font-size: 3rem;
    
    font-family: 'Goudy Bookletter 1911', serif;
    font-weight: 300;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding-bottom: .2rem;
}
h3 {
    font-size: 1.4rem;
    font-weight: 600;
    padding-bottom: 1.3rem;
    text-transform: uppercase;
    font-family: 'Josefin Slab', serif;
    }
    p {
        font-size: 1.2rem;
        font-weight: 500;
        font-family: 'Josefin Slab', serif;
    }
    button {
        padding: 0.7rem 1.5rem;
        margin-top: 3rem;
        cursor: pointer;
        font-weight: 600;
        filter: drop-shadow(0px 8px 8px #ce112e);
        font-family: 'Josefin Slab', serif;
        font-size: .8rem;
        text-transform: uppercase;
        :hover {
            filter: drop-shadow(0px 8px 8px #010200);
        }
        `;
const Social = styled.div`
margin-top: 3rem;
display: flex;
align-items: center;
gap: 1rem;
.social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
        width: 2.3rem;
        height: 2rem;
        display: flex;
        clip-path: circle(50% at 50% 50%);
        background-color: #ce112e;
        position: relative;
        transition: transform 400ms ease-in-out;
        :hover {
            transform: rotate(360deg);
         }
         }
         a {
            color: var(--background);
            top: 55%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%); 
            font-size: 1.2rem;
            }
            }`;
const Profile = styled.div`
`;

