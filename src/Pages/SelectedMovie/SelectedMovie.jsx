import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function SelectedMovie() {
  return (
    <>
      <h1>SelectedMovie</h1>
      <NavLink to="cast">Cast </NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Suspense fallback={<div>Loading...</div>}> {<Outlet />}</Suspense>
    </>
  );
}
