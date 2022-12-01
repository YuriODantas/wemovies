import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 52px;
  
  @media (max-width: 375px) {
    margin-right: 0;
  }
`

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 62px;
  height: 26px;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
  margin: 0 11px;
  padding-left: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #2F2E41;
`
