import Header from './components/Banner/Header.jsx';
import styled from "styled-components";
import ProfHeader from './components/Banner/ProfHeader.jsx';
import About from './components/about-me/about.jsx';
import Projects from './components/Portfolio/Projects.jsx';



function App() {
  return (
   <Container>
    <Banner>
    <Header />
    <ProfHeader />
    </Banner>
    <ChangeColor>
    <About />
    </ChangeColor>
    <Projects />
   </Container>
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