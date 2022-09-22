import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;
  height: 62px;
  width: 80%;
  font-weight:bold;

  margin: 20px 0;
  transition: 300ms; 

  &:hover {
    opacity: .7;
    cursor:pointer;
  }
`;
