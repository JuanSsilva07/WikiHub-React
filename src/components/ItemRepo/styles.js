import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  .buttons{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-around;
    text-align:center;
  }

  a {
    display:flex;
    align-items:center;
    justify-content: center;
    text-decoration: none;
    color: #fafafa60;
    border: .01rem solid #fafafa;
    border-radius: .7rem;
    height: 2rem;
    width: 8rem;
    transition: 300ms;
  }
  a:hover{
    opacity: 0.5;
  }


  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
