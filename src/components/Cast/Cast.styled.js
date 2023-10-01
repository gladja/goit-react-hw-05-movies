import styled from 'styled-components';

export const List = styled.ul`
  margin: 30px auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;

`
export const Item = styled.li`
  width: 150px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`
export const Img = styled.li`
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
`
