import Header from './components/Banner/Header.jsx';
import styled from "styled-components";
import ProfHeader from './components/Banner/ProfHeader.jsx';
import About from './components/about-me/about.jsx';


function App() {
  return (
   <Container>
    <Banner>
    <Header />
    <ProfHeader />
    </Banner>
    <About />
    <changeColour />
   </Container>
  );
}

export default App;
const Container = styled.div``;
const Banner = styled.div`
background: var(--background);
height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }`;

  const changeColour = styled.div`
  background-color: #9b9893;
  `;