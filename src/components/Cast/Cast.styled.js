import styled from 'styled-components';

export const List = styled.ul`
  margin: 30px auto;
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

`
export const Item = styled.li`
  width: 150px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`
export const Img = styled.li`
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  background: lightgray;


  //&> img {
  //background-image: url("../../img/person.webp");
  //}
`
