import styled from "styled-components";

export const Container = styled.table`
  @media (max-width: 375px) {
    display: none;
  }
`

export const WrapperTitle = styled.div`
 margin-right: 150px;

@media (max-width: 375px) {
  margin-right: 0;
  display: flex;
  align-items: center;
}
`