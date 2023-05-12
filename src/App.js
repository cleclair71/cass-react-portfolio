import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Banner/Header.jsx';
import styled from "styled-components";
import ProfHeader from './components/Banner/ProfHeader.jsx';
import About from './components/about-me/about.jsx';
import Projects from './components/Portfolio/Projects.jsx';
import Resume from './components/Resume.jsx';
import { useEffect } from 'react';

function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [hash]);
}



function App() {
  useScrollToHash();
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <Banner>
                <Header />
                <ProfHeader />
              </Banner>
              <ChangeColor id="about">
                <About />
              </ChangeColor>
              <div id="projects">
                <Projects />
              </div>
            </>
          }/>
          <Route path="/resume" element={
            <>
              <Banner>
                <Header />
                <ProfHeader />
              </Banner>
              <Resume />

            </>
          }/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
const Container = styled.div``;
const Banner = styled.div`
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