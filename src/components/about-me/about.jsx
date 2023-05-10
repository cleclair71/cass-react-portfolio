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

const Container = styled.div``;
const Cards = styled.div``;


