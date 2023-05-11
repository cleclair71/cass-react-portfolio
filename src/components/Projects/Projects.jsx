import React from "react";
import styled from "styled-components";
import { Zoom } from 'react-awesome-reveal';
import SlideShow from "./Slider";

const Projects = () => {
    return (
        <Container id="project">
            <Zoom>
                <h1>Recent <span className="red">Projects</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
            voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
            </Zoom>
            <Slide>
                <SlideShow />
            </Slide>
        </Container>
    )
}

export default Projects;

const Container = styled.div``;
const Slide = styled.div``;