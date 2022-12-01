import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

export const Price = styled.p`
  font-size: 16px;
  color: #2F2E41;
  margin-right: 192px;
  
  @media (max-width: 375px) {
    margin-right: 0;
  }
`

export const Title = styled.p`
  font-size: 12px;
  color: #999999;
  
  @media (min-width: 376px) {
    display: none;
  }
`