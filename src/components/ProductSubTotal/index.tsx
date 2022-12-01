import { FC } from 'react'
import * as S from './styles'

interface IProps {
  subtotal: number
}

const ProductSubTotal: FC<IProps> = ({ subtotal }) => {
  return (
    <S.Container>
      <S.Title>SUBTOTAL</S.Title>
      <S.Price>{subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.Price>
    </S.Container>
  )
}

export default ProductSubTotal