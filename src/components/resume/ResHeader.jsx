import React from 'react';
import styled from 'styled-components';
import { AiOutlineDownload } from 'react-icons/ai';
import { Slide } from 'react-awesome-reveal';


// This is the header component for the resume page
const ResHeader = () => {
    return (
        <Container id="home">
            <Slide direction="left">
                <Texts>
                    <h1>
                        Cassie LeClair.</h1>
                    <p>I'm a Front End Web Developer based in the Greater Toronto Area. I have a passion for creating beautiful, responsive websites and applications. I'm currently seeking a full-time position as a Front End Web Developer.</p>
                    <Buttons>
                        <a href="/cass-react-portfolio/#footer">Contact</a>
                        <a href="/assets/Resume/resume.pdf" download>
                            Resume <AiOutlineDownload />
                        </a>
                    </Buttons>

                </Texts>
            </Slide>
        </Container>
    );
};

export default ResHeader;

const Container = styled.div`
background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(1px);
    display: flex;
   margin: 0 auto;
   margin-top: 2rem;
    padding-top: 3.2rem;
    padding: 4rem;
    gap: 2rem;
    width: 80%;
    max-width: 1200px;
    border-radius: 10px;
   
    @media (max-width: 840px) {
        width: 90%;
    }
    @media (max-width: 640px) {
        
        padding: 1rem;
    }`;
const Texts = styled.div`
flex: 1;
h1 {
    font-size: 5rem;
    color: var(--white);
    font-family: 'chalkandfriendone-regular', serif;
    line-height: .9; 
    font-weight: 300;
    display: flex;

    text-transform: uppercase;
    padding-bottom: 2rem;
    text-shadow: 4px 3px 4px rgba(19, 38, 42, 1);
    padding-left: 1rem;
    @media (max-width: 640px) {
        font-size: 3rem;
    }
}

p {
    font-size: 1.3rem;
    font-weight: 200;
    font-family: 'Montserrat', sans-serif;
    color: rgba(255, 248, 244, 0.9);
    width: 80%;
    @media (max-width: 640px) {
        font-size: 1rem;
    }
    
}`;

    const Buttons = styled.div`
margin-top: 2rem;
display: flex;
gap: 1rem;
flex-direction: row;
flex-wrap: wrap;

button {
    background: none;
    border: 1px solid var(--white);
    padding: 0.7rem 1.4rem;
    cursor: pointer;
    font-weight: 600;
    filter: drop-shadow(0px 8px 8px #13262a);
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.2rem;
    font-size: .8rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 5px;
    @media (max-width: 640px) {
        padding: 0.5rem 1rem;
        font-size: 0.7rem;
    }
    :hover {
        background-color: rgba(255, 248, 244, 0.2);
    }
}
a {
    background: none;
    border: 1px solid var(--white);
    padding: 0.7rem 1.4rem;
    cursor: pointer;
    font-weight: 600;
    filter: drop-shadow(0px 8px 8px #13262a);
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.2rem;
    font-size: .8rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 5px;
    text-decoration: none; // This removes the underline from the link
    @media (max-width: 640px) {
        padding: 0.5rem 1rem;
        font-size: 0.7rem;
    }
    :hover {
        background-color: rgba(255, 248, 244, 0.2);
    }
}`;
