import React from 'react'
import styled from 'styled-components';
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen, HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
// import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
// import { Form } from 'react-router-dom';

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
                    <h1 id="heading">CONTACT</h1>
                </Slide>
                <div className="location">
                    
                    <Slide direction="left">
                        <h1>Location</h1>
                    </Slide>
                    
                    <Slide direction="left"><p><span>
                        <HiOutlineLocationMarker />
                    </span> Toronto, ON</p></Slide>
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
            <FormContainer>
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
            </FormContainer>
        </Container >
    );
};

export default Footer;

const Container = styled.div`
    display: flex;
    position: relative;
    margin-top: 2rem;
    padding: 2rem 0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    @media (max-width: 840px) {
        width: 90%;
      }
      @media (max-width: 650px) {
        flex-direction: column;
        gap: 3rem;
      }`;
const Profile = styled.div`
flex: 1;
#heading {
    font-family: 'Mothra', serif;
    color: var(--white);
    text-shadow: 4px 3px 4px rgba(91, 93, 48);
    font-size: 3rem;
    font-weight: 200;
}
.location {
    padding: 1rem 0;
    h1 {
        font-size: 1.2rem;
        margin-bottom: .5rem;
        font-family: 'josfin sans' , sans-serif;
    }
    
    p {
        width: 60%;
        padding-top: .5rem;
        @media (max-width: 650px) {
            width: 100%;
            }
         }
     }
            
    .links {
        h1 {
             font-size: 1.2rem;
             margin-bottom: .5rem;
         }
        div {
            display: flex;
            align-items: center;
            gap: .5rem;
            a {
                text-decoration: none;
                color: var(--white);
                :hover {
                    color: var(--orange);
                 }
            }
         }
    }
                                
    .profiles {
        h1 {
            font-size: 1.2rem;
            padding: .5rem;
        }

        .icons {
            display: flex;
            align-items: center;
        

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFF8F4;
                background-color: transparent; 
                border: 1px solid var(--white); 
                border-radius: 50%;
                margin-right: .5rem;
                height: 2rem;
                width: 2rem;

                :hover {
                    background-color: rgba(255, 248, 244, 0.2); 
                }

                a {
                    margin-top: 0.2;
                    color: var(--white);
                }
            }
        }
    }
      
`;
const ArrowUp = styled.div`
display: flex;
height: 2rem;
width: 2rem;
background-color: transparent;
border: 1px solid var(--white);
border-radius: 50%;
align-items: center;
justify-content: center;
cursor: pointer;
font-size: 1.4rem;
margin-top: 2rem;

:hover {
    background-color: rgba(255, 248, 244, 0.2);
    }
    @media (max-width: 650px) {
        position: absolute;
        right: 3rem;
        top: 16rem;
        }

    `;
const FormContainer = styled.div`
flex: 1;
h1 {
    font-size: 1.2rem;
    padding: .5rem;
    }
    form {
        background-color: var(--background);
        padding: .8rem;
        border-radius: 5px;
        
        .name,
        .email, 
        .message {
            display: flex;
            border: 1px solid var(--white);
            margin-bottom: .5rem;
            border-radius: 5px;
            box-shadow: 0 8px 8px #13262ab7;

      &:focus-within {
        background-color: rgba(255, 248, 244, 0.2);
      }

            input,
            textarea {
                background-color: transparent;
                border: none;
                outline: none;
                color: var(--white);
                padding: 1rem .5rem;
                width: 100%;
                transition: background 0.3s ease;
                cursor: pointer;
        }
            span {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFF8F4;
                background-color: transparent;
                width: 3rem;
            }
            .messageIcon {
                align-items: flex-start;
                padding-top: .5rem;
            }
        }
input::placeholder,
textarea::placeholder { 
    color: var(--dark);
    opacity: .6;
    font-family: 'josefin sans', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    }
        button {
            background: var(--background);
            border: 1px solid var(--white);
            padding: 0.7rem 1.4rem;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 8px 8px #13262ab7;
            color: var(--white);
            font-family: 'josefin sans', sans-serif;
            letter-spacing: 0.2rem;
            border-radius: 5px;
            text-transform: uppercase;

            :hover {
                background-color: rgba(255, 248, 244, 0.2);

            }
                `;

