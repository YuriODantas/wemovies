import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 21px;
  border-top: 1px solid #999999;
  margin-top: 21px;

  @media (max-width: 375px) {
    flex-direction: column-reverse;
  }
`

export const Button = styled.button`
  width: 235px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #009EDD;
  color: #FFF;
  font-size: 14px;
  cursor: pointer;
  
  @media (max-width: 375px) {
    width: 100%;
  }
`

export const WrapperTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    width: 100%;
    justify-content: flex-end;
  }
`

export const Total = styled.p`
  font-size: 14px;
  color: #999999;
  margin-right: 20px;
`

export const Price = styled.span`
  font-size: 24px;
  color: #2F2E41;
  @media (max-width: 375px) {
    padding-right: 16px;
  }
`
