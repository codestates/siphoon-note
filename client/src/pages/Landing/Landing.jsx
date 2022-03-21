import { Container, Main, Button } from './Landing.style';
import Navbar from '../../components/Navbar';
import { NavLink } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <Container imgUrl="img/pattern1.svg">
        <Navbar />
        <Main>
          <NavLink to={'/main'}>
            <Button>
              pattern
              <br></br>number 3 <br></br>Test-ing
            </Button>
          </NavLink>
        </Main>
      </Container>
    </>
  );
}
