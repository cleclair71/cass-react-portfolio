// import React from "react";
// import styled from "styled-components";
// import { Zoom } from 'react-awesome-reveal';
// import SliderComp from "./Slider";

// const Projects = () => {
//     return (
//         <Container id="project">
//             <Zoom>
//                 <h1>Recent <span className="red">Projects</span></h1>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
//             voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
//             </Zoom>
//             <Slide>
//                 <SliderComp />
//             </Slide>
//         </Container>
//     )
// }

// export default Projects;

// const Container = styled.div`
//     width: 80%;
//     margin: 0 auto;
//     padding: 3rem 0;
//     max-width: 1280px;
//     text-align: center;
//     position: relative;
//     @media(max-width: 840px){
//         width: 90%;
//     }
//     h1{
//         font-size: 1.9rem;
//     }
//     p{
//         width: 28rem;
//         margin: 0 auto;
//         padding: 1rem 0;
//         font-size: 1.2rem;
//         font-family: 'josefin slab', serif;;
//         @media(max-width : 500px){
//             width: 90%;
//         }
//     }
// `;
    
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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
            voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
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
        font-family: 'Mothra', serif;
        text-shadow: 4px 3px 4px rgba(19, 38, 42, 1);
        letter-spacing: 0.2rem;
        text-transform: uppercase;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``