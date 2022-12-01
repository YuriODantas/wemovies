import { FC } from 'react'
import * as S from './styles'

const TableHeader: FC = () => {
  return (
    <S.Container>
      <tr>
        <th>PRODUTO</th>
        <th>QTD</th>
        <th>SUBTOTAL</th>
        <th></th>
      </tr>
    </S.Container>
  )
}

export default TableHeader