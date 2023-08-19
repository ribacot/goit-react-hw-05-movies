import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Outlet,NavLink } from 'react-router-dom';

export default function Layout() {
  console.log('layout')
  return (
    <>
      <Header>
        <Container>
            <nav>
                <NavLink to='/' className='navLink'><Button>Home</Button></NavLink>
                <NavLink to='movie' className='navLink'><Button>Movies</Button></NavLink>
            </nav>
            
        </Container>
      </Header>
      <Container>{<Outlet/>}</Container>
    </>
  );
}
