import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import SkillBar from 'react-skillbars';

// Skill bar data
const skills = [
    {type: "HTML", level: 85},
    {type: "CSS", level: 85},
    {type: "Javascript", level: 75},
    {type: "React", level: 70},
    {type: "Bootstrap", level: 80},
    {type: "SASS", level: 70},
    {type: "Git", level: 75},
    {type: "Responsive", level: 85},  
  ];

  // Skill bar styling
  const colors = {
    "bar": "#fff8f4b0",
    "title": {
      "text": "#FFF8F4",
      "background": "var(--background)"
    }
  }
// This is the Skills section layout component
  const SkillsSection = () => {
    const [isSkillsOpen, setSkillsOpen] = useState(false);
    const [bar, setBar] = useState(false);
  
    return (
      <Container>
        <Section>
          <h2 onClick={() => { setSkillsOpen(!isSkillsOpen); setBar(!bar) }}>Skills</h2>
          {isSkillsOpen && <Grid>
            <Slide direction="left">
            <SkillBar skills={skills} colors={colors} />
            </Slide>
          </Grid>}
        </Section>
      </Container>
    );
  };
  

export default SkillsSection;

const Container = styled.div`
display: grid;
    flex-direction: row;
    gap: 2rem;
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;`;

const Section = styled.div`
margin-bottom: 2rem;
border-bottom: .2px solid rgba(255, 248, 244, 0.4);

h2 {
    font-size: 2rem;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    margin: 1.5rem;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30%;
        height: 2px;
        background-color: var(--white);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease-in-out;

    }`;

const Grid = styled.div`
padding: 1.5rem;`;

