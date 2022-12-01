import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 960px;
  height: 574px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 4px;
  padding: 24px;
  
  @media (max-width: 425px) {
    width: 385px;
  }

  @media (max-width: 375px) {
    width: 343px;
  }
`