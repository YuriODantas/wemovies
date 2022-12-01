import { FC } from 'react'
import * as S from './styles'

interface IProps {
  price: number
}

const ProductPrice: FC<IProps> = ({ price }) => {
  return (
    <S.Container>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.Container>
  )
}

export default ProductPrice