import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 30px auto;
  display: flex;
  width: 50%;
  border: 2px solid lightgray;
  border-radius: 15px;
  overflow: hidden;
`

export const List = styled.ul`
display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
`

export const Item = styled.li`
  //padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  //border: 1px solid gray;
  //border-radius: 10px;
  &> a {

  color: black;
  }
`

export const BtnBack = styled.span`
  padding: 5px 15px;
  border-radius: 10px;
  background: #e06363;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  transition: background .15s ease-in-out, box-shadow .15s ease-in-out;

  & > a {
    color: white;
  }

  &:hover {
    background: #cb0000;
  }
`
export const WrapText = styled.div`
text-align: left;
  padding: 15px;
`
export const Title = styled.p`
font-weight: bold;
  margin-top: 15px;
  margin-bottom: 5px;

  &> span {
    font-weight: normal;
  }
`
export const ListGenre = styled.ul`
display: flex;
  gap: 10px;
`
