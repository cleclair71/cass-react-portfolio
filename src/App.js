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
background: linear-gradient(159deg, rgb(220,221,216) 0%, rgb(43, 43, 53) 100%);
height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }`;