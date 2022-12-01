import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 9px;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #FFF;

  @media (max-width: 425px) {
    display: none;
  }

  @media (max-width: 375px) {
    display: none;
  }
`

export const SubTitle = styled.span`
  color: #999999;
  font-size: 12px;
  font-weight: 600;
`