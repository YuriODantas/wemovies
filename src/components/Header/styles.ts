import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  margin-bottom: 24px;
  color: #FFF;
`

export const Title = styled(Link)`
  text-decoration: none;
  color: #FFF;
  font-size: 20px;
`