import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Suspense, useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [height, setHeight] = useState(0);
  const isHeight = h => {
    setHeight(h);
  };

  return (
    <>
      <Header isHeight={isHeight}>
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
        <Suspense fallback={<h2>Loading...</h2>}>
          {<Outlet context={[height]} />}
        </Suspense>
      </main>
    </>
  );
}
