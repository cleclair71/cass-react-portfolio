import React from 'react';
import ResHeader from './ResHeader';
import Top from './Top';
import Content from './Content';
import Footer from '../Footer';
import styled from 'styled-components';
import Header from '../Banner/Header';
import SkillsSection from './Skill';
import Cursor from '../StyledCursor'

// This is the Resume component that compiles its components and exports them to the App.js file
const Resume = () => {
  return (
    <div>
      <Cursor />
      <ResBanner>
        <Header />
        <ResHeader />
      </ResBanner>
      <Background>
        <BlurredContainer>
          <Top />
          <Content />
          <SkillsSection />
        </BlurredContainer>
      </Background>

      <Footer />

    </div>
  );
};

export default Resume;

const ResBanner = styled.div`

height: 100vh;
@media (max-width: 640px) {
height: 100%;
padding-bottom: 2rem;
}
`;


const Background = styled.div`
margin: 0 auto; 
background: url('/assets/field.png');
background-size: cover;
background-position: center;
background-attachment: fixed;

`;

const BlurredContainer = styled.div`
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(1px);
display: flex;
flex-direction: column;
padding: 2rem;
gap: 2rem;
width: 80%;
max-width: 1200px;
margin: 0 auto;
border-radius: 10px;
margin-bottom: 3rem;
`;