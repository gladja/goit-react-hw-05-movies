import styled from 'styled-components';

export const Nav = styled.ul`
display: flex;
  gap: 10%;
  justify-content: center;
  padding: 10px 0;
  margin: 20px 10%;
  border-radius: 25px;
  background: lightskyblue;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`
export const Item = styled.li`
  padding: 10px;
`
export const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  transition: color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    color: white;
  }
`
