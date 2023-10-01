import styled from 'styled-components';

export const Form = styled.form`
//margin: 10px;
`

export const Input = styled.input`
  font-weight: bold;
  color: #4f4e4e;
  font-size: 16px;
  padding: 10px 15px;
  border: 2px solid lightgray;
  border-radius: 15px 0 0 15px;
  margin: 5px 0;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);

  &:focus {
    outline: none;
    border: 2px solid #c5c2c2;
  }
`
export const Btn = styled.button`
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 0 15px 15px 0;
  background: #e06363;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  transition: background .15s ease-in-out, box-shadow .15s ease-in-out;

  &:hover {
    background: #cb0000;
  }

`

