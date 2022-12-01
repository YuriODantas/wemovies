import { FC } from 'react'
import { Products } from '../../services/products'
import ButtonAddItem from '../ButtonAddItem'
import * as S from './styles'

interface IProps {
  product: Products
}

const CardItems: FC<IProps> = ({ product }) => {
  return (
    <S.Container>
      <img src={product.image} alt={product.title} />
      <S.Title>{product.title}</S.Title>
      <S.Price>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.Price>
      <ButtonAddItem product={product} />
    </S.Container>
  )
}

export default CardItems