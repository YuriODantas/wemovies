import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  @media (min-width: 376px) {
    display: none;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperTitleQnt = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`

export const WrapperPriceDelete = styled.div`
  display: flex;
  margin-bottom: 5px;
  >span {
    margin-right: 16px;
  }
`