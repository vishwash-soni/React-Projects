import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;

  width: 220px;
  height: 44px;

  background: #000000;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.2s background ease-in;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.2s background ease-in;
  }
`;




export const OutLineBtn = styled(Button)`
background-color: white;
  color: black;
&:hover {
    background-color: black;
    color: white;
  }
`
 