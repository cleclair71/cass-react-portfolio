import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Slide } from 'react-awesome-reveal';
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

const About = () => {
    return (
        <Container id="about">
            <Slide direction="down">
                <h4> about <span className="red">me</span></h4>
                <h1>what i do</h1>
            </Slide>
            <Cards>
                <Slide direction="left">
                    <Card Icon={MdDesignServices} title={"design"}
                     description={"I value simple content structure, clean design patterns, and thoughtful interactions."} />
                </Slide>
                <Slide direction="up">
                    <Card Icon={FiCodesandbox} 
                    title={"development"} 
                    description={"I like to code things from scratch, and enjoy bringing ideas to life in the browser."} />
                </Slide>
                <Slide direction="right">
                    <Card Icon={CgWebsite}
                        title={"web design"}
                        description={"I enjoy creating websites that are accessible to everyone and fun to use."} />
                </Slide>
            </Cards>
        </Container>
    );
};

export default About;

const Container = styled.div`
    width: 80%;
    margin: auto;
    max-width: 1200px;
    padding: 3rem 0;
    
    h4 {
        font-weight: 400;
    padding: 0.1rem 0;
    font-family: 'Just Me Again Down Here', cursive;
    font-size: 1.8rem;
    }
    h1 {
        font-size: 4rem;
    color: var(--white);
    font-family: 'chalkandfriendone-regular', serif;
    line-height: .9; 
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 4px 3px 4px #000;
    }

    @media (max-width: 840px) {
        width: 90%;
        }
        h1 {
            padding-top: .5rem;
        }`;
const Cards = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  `;



