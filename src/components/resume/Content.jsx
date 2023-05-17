import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide, Zoom } from 'react-awesome-reveal';

const Content = () => {
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
                    <Zoom>
                        <ImageWrapper>
                            
                            <RoundedImage src="/assets/IMG_5541.jpg" alt="Cassie LeClair" />
                        </ImageWrapper>
                    </Zoom>
                    <Slide direction="right">
                        <p className="blurb">I specialize in design and CSS, creating visually appealing and user-friendly interfaces. With expertise in HTML5, CSS3, and responsive design, I craft seamless websites that perform optimally across devices. Leveraging JavaScript and frameworks like React, I implement interactive features for exceptional web applications. Passionate about staying updated with industry trends, I strive to create immersive and accessible web experiences..</p>
                    </Slide>
                </Grid>
            </Section>
            <Section>
                <h2 onClick={() => { setExperienceOpen(!isExperienceOpen); setBar(!bar) }}>Experience</h2>
                {isExperienceOpen && <Grid>
                    <Slide direction="left">
                        <strong>Toronto Zoo</strong>
                    </Slide>
                    <Zoom>
                        <div>2021-2022</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Horticultural Technician</strong>
                            <p>As a Horticultural Technician, I was responsible for maintaining and enhancing the zoo's landscapes and gardens. This included planting and nurturing a variety of plant species, implementing landscape designs, and ensuring the overall health and aesthetic appeal of the zoo's outdoor areas. I collaborated with a team of horticultural professionals to create engaging and sustainable environments for both visitors and animal inhabitants.</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <strong>Self-Employed</strong>
                    </Slide>
                    <Zoom>
                        <div>2019-Present</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Certified Personal Trainer</strong>
                            <p>Certified Personal Trainer conducting one-on-one training sessions in state of the art fitness studio. Adept in creating a warm environment in which clients of all ages can successfully achieve health and wellness goals.</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <strong>Surmesur</strong>
                    </Slide>
                    <Zoom>
                        <div>2017-2019</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Assistant Manager</strong>
                            <p>Certified Personal Trainer conducting one-on-one training sessions in state of the art fitness studio. Adept in creating a warm environment in which clients of all ages can successfully achieve health and wellness goals.</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <strong>Fulford Place Museum</strong>
                    </Slide>
                    <Zoom>
                        <div>2013-2016</div>
                    </Zoom>
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
                        <strong>University of Toronto Bootcamp</strong>
                    </Slide>
                    <Zoom>
                        <div>2023</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Full-Stack Web Development</strong>
                            <p>A rigorous and fast-paced, condensed course offered by edX Bootcamps and the University of Toronto that teaches the practical, technical skills that will enable me to build robust web applications.</p>
                        </div>
                    </Slide>
                    <Slide direction="left">
                        <strong>Trent University</strong>
                    </Slide>
                    <Zoom>
                        <div>2012-2017</div>
                    </Zoom>
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
                        <strong>Git Certification Course</strong>
                    </Slide>
                    <Zoom>
                        <div>2023</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>Git BASH · Git Commands · Version Control</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <strong>HTML Advanced Certification Course</strong>
                    </Slide>
                    <Zoom>
                        <div>2023</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>HTML5 · Semantic HTML · Multimedia Elementsl</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <strong>JavaScript Certification Course</strong>
                    </Slide>
                    <Zoom>
                        <div>2023</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>Variables · strings · Functions</p>
                        </div>
                    </Slide>

                    <Slide direction="left">
                        <strong>SASS Certification Course</strong>
                    </Slide>
                    <Zoom>
                        <div>2023</div>
                    </Zoom>
                    <Slide direction="right">
                        <div>
                            <strong>Google Developers</strong>
                            <p>Code Nesting · Mixins · Operations and Functions</p>
                        </div>
                    </Slide>
                </Grid>}
            </Section>
            {/* skills section*/}
        </Container>
    );
};

export default Content;

const Container = styled.div`
display: grid;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    
 
    p {
        margin: 1.5rem;
    }

    strong {
        margin: 1.5rem;
    }
    @media (max-width: 840px) {
        width: 90%;
    }
  
    @media (max-width: 640px) {
        padding: 1.5rem;
        
    }`;
const Section = styled.div`
margin-bottom: 1rem;
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
}

;`;
const Grid = styled.div`
display: grid;
    grid-template-columns: 2fr 1fr 3fr;
    gap: 1rem;
    
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }`;
const RoundedImage = styled.img`
width: 80%;
    border-radius: 50%;
    opacity: 0.8;
    
    @media (max-width: 640px) {
        width: 70%;
    }
    `;
    


const ImageWrapper = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    // padding-bottom: 2rem;
`;

