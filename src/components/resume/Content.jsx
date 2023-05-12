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
            <h2 onClick={() => {setSkillsOpen(!isSkillsOpen); setBar(!bar)}}>Experience</h2>
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
            <Section>
            <h2 onClick={() => {setSkillsOpen(!isSkillsOpen); setBar(!bar)}}>Education</h2>
                {isEducationOpen && <p>
                   education content goes here...
                </p>}
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

const Container = styled.div``;
const Section = styled.div``;
const Grid = styled.div``;
const RoundedImage = styled.img``;

                    