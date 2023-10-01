import { NavLink, Outlet } from 'react-router-dom';
import { Item, Nav, Text } from './SharedLayout.styled';

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
      <Outlet />
    </>
  )
}
