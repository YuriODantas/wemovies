import { FC, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import * as S from './styles'

const ButtonCartMenu: FC = () => {
  const { countItems } = useContext(CartContext)
  return (
    <S.Container to="/cart">
      <S.WrapperTitle>
        <S.Title>MeuCarrinho</S.Title>
        <S.SubTitle>{countItems} itens</S.SubTitle>
      </S.WrapperTitle>
        <img src="/icons/ShoppingBag.svg" alt="Sacola de compras" />
    </S.Container>
  )
}

export default ButtonCartMenu