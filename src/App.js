import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Banner/Header.jsx';
import styled from "styled-components";
import ProfHeader from './components/Banner/ProfHeader.jsx';
import About from './components/about-me/about.jsx';
import Projects from './components/Portfolio/Projects.jsx';
import Resume from './components/resume/Resume.jsx';
import { useEffect } from 'react';
import Footer from './components/Footer.jsx';
import Cursor from './components/StyledCursor.jsx'


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
  return (
    <Router>
      <ScrollToHash />
      <Container>
        <Routes>
          <Route path="/" element={
            <>
            <Cursor />
              <Banner>
                <Header />
                <ProfHeader />
              </Banner>
              <div id="about">
                
                <About />
              </div>
              <div id="projects">
                <Projects />
              </div>
              {/* <ChangeColor> */}
                <Footer />
              {/* </ChangeColor> */}
            </>
          }/>
          <Route path="/resume" element={
            <>

              <Resume />

            </>
          }/>
        </Routes>
      </Container>
    </Router>
  );
}

function ScrollToHash() {
  useScrollToHash();
  return null;
}

export default App;
const Container = styled.div`
background: url('/assets/field.png');
background-size: cover;
background-position: center;
background-attachment: fixed;`;
const Banner = styled.div`
// background: 
// url('/assets/field.png');
// background-size: cover;
// background-position: center;
height: 100vh;
@media (max-width: 640px) {
height: 100%;
padding-bottom: 2rem;
}
`;

  // const ChangeColor = styled.div`
  // background: var(--dark);
  // `;