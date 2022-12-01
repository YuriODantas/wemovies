import styled from "styled-components"

export const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 0 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 100px;
  }
  
  @media (max-width: 768px) {
    padding: 0 60px;
  }
 
  @media (max-width: 425px) {
    padding: 0 20px;
  }

  @media (max-width: 375px) {
    padding: 0 16px;
  }
`