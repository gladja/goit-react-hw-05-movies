import styled from 'styled-components';

export const List = styled.ul`
margin-top: 20px;
  //margin: 20px auto 0;
  //text-align: center;
`
export const Item = styled.li`
  padding: 6px 15px;
  text-align: left;
  width: 40%;
  margin: 5px auto;
  background: darkgray;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 0.02em;
  border: 2px solid darkgray;

  &> a {
    color: white;
    width: 100%;
    padding: 6px 200px 6px 0;
  }
  &:hover {
    background: white;
    border: 2px solid darkgray;
  }

  &:hover > a{
    color: black;
  }
`

