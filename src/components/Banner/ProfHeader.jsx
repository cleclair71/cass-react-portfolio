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
                        hey, <span className="dark">i'm</span>
                    </h4>
                    <h1 className="red">cassie <br/> leclair</h1>
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
                        <img src="/assets/profilepiccc.png" alt="profile" />
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
    padding: 0.1rem 0;
    font-family: 'Just Me Again Down Here', cursive;
    font-size: 1.8rem;
}
h1 {
    font-size: 5rem;
    color: var(--white);
    font-family: 'Mothra', serif;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding-bottom: .2rem;
    text-shadow: 4px 3px 4px rgba(19, 38, 42, 1);
    padding-top: 1rem;
}
h3 {
    font-size: 1.4rem;
    font-weight: 600;
    padding-bottom: 1.2rem;
    text-transform: uppercase;
    font-family: 'Josefin Slab', serif;
    color: rgba(255, 248, 244, 0.6);
    }
    p {
        font-size: 1.2rem;
        font-weight: 200;
        font-family: 'Josefin Slab', serif;
        color: rgba(255, 248, 244, 0.9);
        
    }
    button {
        background: none;
        border: 1px solid var(--white);
        padding: 0.7rem 1.4rem;
        margin-top: 2rem;
        cursor: pointer;
        font-weight: 600;
        filter: drop-shadow(0px 8px 8px #13262a);
        color: var(--white);
        font-family: 'Josefin Slab', serif;
        letter-spacing: 0.2rem;
        font-size: .8rem;
        text-transform: uppercase;
        border-radius: 5px;
        :hover {
            background-color: rgba(255, 248, 244, 0.2);
        }
        `;
        const Social = styled.div`
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        
        .social-icons {
          display: flex;
          align-items: center;
          gap: 1rem;
          
          span {
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            color: var(--background);
            background-color: transparent; 
            border: 1px solid var(--white); 
            border-radius: 50%; 
            position: relative;
            transition: transform 400ms ease-in-out, background-color 400ms ease-in-out;
            
            :hover {
              background-color: rgba(255, 248, 244, 0.2); 
            }
          }
          
          p {
            font-size: 0.9rem;
            @media (max-width: 690px) {
              font-size: 0.7rem;
            }
          }
          
          a {
            color: var(--white);
            top: 55%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%); 
            font-size: 1.2rem;
          }
        }
      `;
const Profile = styled.div`
img {
    width: 25rem;
    filter: drop-shadow(0px 8px 8px var(--dark));
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
        width: 20rem;
    }
    @media (max-width: 660px) {
        width: 15rem;
    }
    @media (max-width: 640px) {
        width: 100%;
    }
}   
:hover img{
    transform: translateY(-10px);
}

`;

