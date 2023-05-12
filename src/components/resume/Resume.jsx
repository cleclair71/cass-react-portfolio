import React from 'react';
import ResHeader from './ResHeader';
import Top from './Top';
import Content from './Content';
import Footer from '../Footer';
import styled from 'styled-components';
import Header from '../Banner/Header';

const Resume = () => {
  return (
    <div>
      <ResBanner>
        <Header />
        <ResHeader />
        </ResBanner>
        <Top />
        <Content />
        <ChangeColor>
        <Footer />
        </ChangeColor>
    </div>
  );
};

export default Resume;

const ResBanner = styled.div`
background: 
url('/assets/field.png');
background-size: cover;
background-position: center;
height: 100vh;
@media (max-width: 640px) {
height: 100%;
padding-bottom: 2rem;
}
`;
const ChangeColor = styled.div`
background: var(--dark);
`;