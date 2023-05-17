   
// const Slide = styled.div``

import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent Projects</h1>
            <p>From responsive layouts to interactive features, each project represents a unique challenge and an opportunity for creativity. Take a closer look at these examples to get a glimpse of my dedication to delivering high-quality and visually stunning digital experiences.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 4rem;
        font-family: 'chalkandfriendone-regular', serif;
        text-shadow: 4px 3px 4px rgba(19, 38, 42, 1);
        line-height: .9; 
    font-weight: 300;
        text-transform: uppercase;
    }

    p{
        width: 80%;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.2rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``