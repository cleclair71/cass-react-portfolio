import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';

const Top = () => {
    return (
        <Container>
      <Slide direction="left">
        <Circle />
      </Slide>
      <Slide direction="left">
        <Column>
          <h1>Cassie LeClair</h1>
          <h3>Front End Web Developer</h3>
        </Column>
        <Line />
      </Slide>
      <Slide direction="right">
        
      </Slide>
    </Container>
    );
};

export default Top;

const Container = styled.div`
display: grid;
position: relative;
grid-template-columns: 2fr 1fr 3fr;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }`;
//  to-do: fix circle
const Circle = styled.div`
position: relative;
z-index: 1;
width: 100px;
height: 100px;
background: #000;
  border-radius: 50%;
  top: 50px;
  left: 50px;`;
const Column = styled.div`
position: relative;
  z-index: 2;
  h1 {

    grid-column: span 1;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding-bottom: 0.2rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        grid-column: span 1;
      }
    }`;
const Line = styled.hr`
grid-column: 2;
border: none;
height: 2px;
background: #000;
@media (max-width: 768px) {
    grid-column: 1;
    width: 70%;
    margin: auto;
  }`;