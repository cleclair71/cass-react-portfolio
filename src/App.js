import Header from './components/Banner/Header.jsx';
import styled from "styled-components";

function App() {
  return (
   <Container>
    <Banner>
    <Header />
    </Banner>
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