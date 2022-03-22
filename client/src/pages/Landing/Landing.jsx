import { Container, Main, Button } from './Landing.style';
import { NavLink } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <Container imgUrl="img/test5.svg">
        <Main>
          <NavLink to={'/diary'}>
            <Button>
              pattern
              <br></br>number 5 <br></br>Test-ing
            </Button>
          </NavLink>
        </Main>
      </Container>
    </>
  );
}
