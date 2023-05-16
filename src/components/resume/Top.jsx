import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import { FiMail, FiPhone } from "react-icons/fi";

const Top = () => {
  return (
    <Container>
      <Section>

        <Grid>
          <Slide direction="left">
            <TitleWrapper>
              <h1>Cassie LeClair</h1>
              <h3>Front End Web Developer</h3>
            </TitleWrapper>

          </Slide>
          <Slide direction="up">
            <ContactInfo>
              <FiMail />
              <span>cassieleclair71@gmail.com</span>
            </ContactInfo>
            <ContactInfo>
              <FiPhone />
              <span>+1 (123) 456-7890</span>
            </ContactInfo>
          </Slide>
          <Slide direction="right">
            <p className="blurb"></p>
          </Slide>
        </Grid>
      </Section>
    </Container>
  );
};


export default Top;

const Container = styled.div`
display: grid;
    flex-direction: column;
    padding: 3.2rem;
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
margin-bottom: 2rem;
border-bottom: .2px solid rgba(255, 248, 244, 0.4);
padding-bottom: 2rem;

h1 {
  
   font-size: 4rem;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
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

}
p {
    font-size: 1.2rem;
    line-height: 1.5;
    transition: max-height 0.2s ease-out;
    overflow: hidden;
}

.blurb {
    padding-top: 2rem;
}`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  gap: 1rem;
    
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TitleWrapper = styled.div`
display: flex;
    flex-direction: column;

  
    `;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
padding-top: 8rem;
margin: 0 auto;

@media (max-width: 1000px) {
  padding-top: 2rem;
}
@media (max-width: 640px) {
  padding-top: 2rem;
}
  svg {
    font-size: 3rem;
    border-bottom: 1px solid var(--white);
    padding-bottom: 0.5rem;
  }

  span {
    font-size: 1rem;  
  }
`;
