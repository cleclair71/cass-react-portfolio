import React from 'react';
import styled from 'styled-components';
import { AiOutlineDownload } from 'react-icons/ai';
import { Slide } from 'react-awesome-reveal';

const ResHeader = () => {
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
    padding-top: 3.2rem;
    padding: 2rem;
    gap: 2rem;
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    border-radius: 10px;
    @media (max-width: 840px) {
        width: 90%;
    }
    @media (max-width: 640px) {
        flex-direction: column;
    }`;
const Texts = styled.div`
flex: 1;
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
p {
    font-size: 1.2rem;
    font-weight: 200;
    font-family: 'Josefin Slab', serif;
    color: rgba(255, 248, 244, 0.9);
    
}`;
const Buttons = styled.div`
margin-top: 2rem;
    display: flex;
    gap: 1rem;
    button {
        background: none;
        border: 1px solid var(--white);
        padding: 0.7rem 1.4rem;
        cursor: pointer;
        font-weight: 600;
        filter: drop-shadow(0px 8px 8px #13262a);
        color: var(--white);
        font-family: 'Josefin Slab', serif;
        letter-spacing: 0.2rem;
        font-size: .8rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 5px;
        :hover {
            background-color: rgba(255, 248, 244, 0.2);
        }
    }`;
