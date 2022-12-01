import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  margin-top: 32px;
  background-color: #009EDD;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`