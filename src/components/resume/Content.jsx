import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';

const Content = () => {
    const [isSkillsOpen, setSkillsOpen] = useState(false);
    const [isEducationOpen, setEducationOpen] = useState(false);
    const [isExperienceOpen, setExperienceOpen] = useState(false);
    const [isCertificationsOpen, setCertificationsOpen] = useState(false);
    const [bar, setBar] = useState(false);

    return (
        <Container>
            <Section>

                <Grid>
                    <Slide direction="left">
                        <h2>About Me</h2>
                    </Slide>
                    <Slide direction="up">
                        <RoundedImage src="/assets/IMG_5541.jpg" alt="Cassie LeClair" />
                    </Slide>
                    <Slide direction="right">
                        <p>As a front-end developer, I specialize in creating and styling front-end components that fulfill the requirements of our mockups and user stories. My skills include CSS, SASS, Bootstrap, React, HTML, and JavaScript. With my expertise in front-end development, I am dedicated to delivering high-quality user experiences and ensuring that my designs are integrated seamlessly.</p>
                    </Slide>
                </Grid>
            </Section>
            <Section>
                <h2 onClick={() => { setExperienceOpen(!isExperienceOpen); setBar(!bar) }}>Experience</h2>
                {isExperienceOpen && <Grid>
                    <Slide direction="left">
                        <div>Toronto Zoo</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2021-2022</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Horticultural Technician</strong>
                            <p>Description...</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <div>Self-Employed</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2019-Present</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Certified Personal Trainer</strong>
                            <p>Certified Personal Trainer conducting one-on-one training sessions in state of the art fitness studio. Adept in creating a warm environment in which clients of all ages can successfully achieve health and wellness goals.</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <div>Surmesur</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2017-2019</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Assistant Manager</strong>
                            <p>Certified Personal Trainer conducting one-on-one training sessions in state of the art fitness studio. Adept in creating a warm environment in which clients of all ages can successfully achieve health and wellness goals.</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <div>Fulford Place Museum</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2013-2016</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Museum Supervisor</strong>
                            <p>Certified Personal Trainer conducting one-on-one training sessions in state of the art fitness studio. Adept in creating a warm environment in which clients of all ages can successfully achieve health and wellness goals.</p>
                        </div>
                    </Slide>
                </Grid>}
            </Section>

            <Section>
                <h2 onClick={() => { setEducationOpen(!isEducationOpen); setBar(!bar) }}>Education</h2>
                {isEducationOpen && <Grid>
                    <Slide direction="left">
                        <div>University of Toronto Bootcamp</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2023</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Full-Stack Web Development</strong>
                            <p>A rigorous and fast-paced, condensed course offered by edX Bootcamps and the University of Toronto that teaches the practical, technical skills that will enable me to build robust web applications.</p>
                        </div>
                    </Slide>
                    <Slide direction="left">
                        <div>Trent University</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2012-2017</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Ancient Greek & Roman Studies & Archaeology</strong>
                            <p>The study of civilizations in an interdisciplinary fashion, by drawing upon historical, literary, and archaeological evidence.</p>
                        </div>
                    </Slide>
                </Grid>}
            </Section>
            <Section>
                <h2 onClick={() => { setCertificationsOpen(!isCertificationsOpen); setBar(!bar) }}>Certifications</h2>
                {isCertificationsOpen && <Grid>
                    <Slide direction="left">
                        <div>Git Certification Course</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2023</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>Git BASH · Git Commands · Version Control</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <div>HTML Advanced Certification Course</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2023</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>HTML5 · Semantic HTML · Multimedia Elementsl</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <div>JavaScript Certification Course</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2023</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>Variables · strings · Functions</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <div>SASS Certification Course</div>
                    </Slide>
                    <Slide direction="up">
                        <div>2023</div>
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>Code Nesting · Mixins · Operations and Functions</p>
                        </div>
                    </Slide>
                </Grid>}
            </Section>
            <Section>
                <h2 onClick={() => { setSkillsOpen(!isSkillsOpen); setBar(!bar) }}>Skills</h2>
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
display: grid;
    flex-direction: column;
    padding: 3.2rem;
    gap: 2rem;
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    

    p {
        margin-left: 2rem;
    }

    strong {
        margin-left: 2rem;
    }
    @media (max-width: 840px) {
        width: 90%;
    }
  
    @media (max-width: 640px) {
        padding: 2rem;
        
    }`;
const Section = styled.div`
margin-bottom: 2rem;
border-bottom: .2px solid rgba(255, 248, 244, 0.4);
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
        width: 30%;
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
    border-radius: 50%;
    margin: 0 auto;
    `;

