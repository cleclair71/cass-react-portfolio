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
      </Slide>
      <Slide direction="right">
        <Line />
      </Slide>
    </Container>
    );
};

export default Top;

const Container = styled.div``;
const Circle = styled.div``;
const Column = styled.div``;
const Line = styled.hr``;