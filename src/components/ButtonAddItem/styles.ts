import styled from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.active ? '#039B00' : '#009EDD'};
  width: 287px;
  height: 40px;
  cursor: pointer;
`

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  >span{
    font-size: 12px;
    font-weight: 400;
    color: #FFF;
  }
`

export const Icon = styled.img`
  height: 12px;
  margin-right: 5px;
`

export const Title = styled.p`
  font-size: 12px;
  color: #FFF;
`