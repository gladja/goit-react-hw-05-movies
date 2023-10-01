import { NavLink, Outlet } from 'react-router-dom';
import { Item, Nav, Text } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Nav>
            <Item>
              <NavLink to={'/'}><Text>Home</Text></NavLink>
            </Item>
            <Item>
              <NavLink to={'/movies'}><Text>Movies</Text></NavLink>
            </Item>
          </Nav>
        </nav>
      </header>
      <Suspense fallback={''}>
      <Outlet />
      </Suspense>
    </>
  )
}
