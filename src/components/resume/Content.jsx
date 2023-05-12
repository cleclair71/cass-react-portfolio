import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';

const Content = () => {
    const [isSkillsOpen, setSkillsOpen] = useState(false);
    const [isEducationOpen, setEducationOpen] = useState(false);
    const [isExperienceOpen, setExperienceOpen] = useState(false);
    const [bar, setBar] = useState(false);

    return (
        <Container>
            <Section>
                
                <Grid>
                    <Slide direction="left">
                        <h2>About Me</h2>
                    </Slide>
                    <Slide direction="up">
                        <RoundedImage src="/path/to/your/image.jpg" alt="Your Name" />
                    </Slide>
                    <Slide direction="right">
                        <p>info</p>
                        </Slide>
                </Grid>
            </Section>
            <Section>
            <h2 onClick={() => {setExperienceOpen(!isExperienceOpen); setBar(!bar)}}>Experience</h2>
                {isExperienceOpen && <Grid>
                    <Slide direction="left">
                        <div>Company name...</div>
                    </Slide>
                    <Slide direction="up">
                        <div>Year...</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Job Title...</strong>
                            <p>Description...</p>
                        </div>
                    </Slide>
                </Grid>}
            </Section>
            
            <Section>
            <h2 onClick={() => {setEducationOpen(!isEducationOpen); setBar(!bar)}}>Education</h2>
                {isEducationOpen && <Grid>
                    <Slide direction="left">
                        <div>Company name...</div>
                    </Slide>
                    <Slide direction="up">
                        <div>Year...</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Job Title...</strong>
                            <p>Description...</p>
                        </div>
                    </Slide>
                </Grid>}
            </Section>
            <Section>
            <h2 onClick={() => {setSkillsOpen(!isSkillsOpen); setBar(!bar)}}>Skills</h2>
                {isSkillsOpen && <Grid>
                    <Slide direction="left">
                        <div>Your skills go here...</div>
                    </Slide>
                    <Slide direction="up">
                        <div>Year...</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Job Title...</strong>
                            <p>Description...</p>
                        </div>
                    </Slide>
                </Grid>}
            </Section>
            </Container>
    );
};

export default Content;

const Container = styled.div`
display: flex;
    flex-direction: column;
    padding: 3.2rem;
    gap: 2rem;
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    @media (max-width: 840px) {
        width: 90%;
    }
  
    @media (max-width: 640px) {
        padding: 2rem;
        
    }`;
const Section = styled.div`
margin-bottom: 2rem;
h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--white);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease-in-out;
        
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
}
p {
    font-size: 1.2rem;
    line-height: 1.5;
    transition: max-height 0.2s ease-out;
    overflow: hidden;
}`;
const Grid = styled.div`
display: grid;
    grid-template-columns: 2fr 1fr 3fr;
    gap: 1rem;`;
const RoundedImage = styled.img`
width: 100%;
    border-radius: 50%;`;

                    