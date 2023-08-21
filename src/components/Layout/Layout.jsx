import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
export default function Layout() {
  const location = useLocation();

  // console.log('layout')
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavLink to="/" className="navLink" state={{ from: location }}>
              <Button>Home</Button>
            </NavLink>
            <NavLink to="movie" className="navLink" state={{ from: location }}>
              <Button>Movies</Button>
            </NavLink>
          </nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}> {<Outlet />}</Suspense>
      </main>
    </>
  );
}
