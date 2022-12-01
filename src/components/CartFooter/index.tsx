import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import * as S from './styles'

const CartFooter: FC = () => {
  const { total, clean } = useContext(CartContext)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/done')
    clean()
  }

  return (
    <S.Container>
      <S.Button onClick={handleClick}>FINALIZAR PEDIDO</S.Button>
      <S.WrapperTotal>
        <S.Total>TOTAL</S.Total>
        <S.Price>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.Price>
      </S.WrapperTotal>
    </S.Container>
  )
}

export default CartFooter