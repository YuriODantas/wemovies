import { FC, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Products } from '../../services/products'
import * as S from './styles'

interface IProps {
  product: Products
}

const ButtonAddItem: FC<IProps> = ({ product }) => {
  const { addItem, cart } = useContext(CartContext)
  const [count, setCount] = useState(0)

  const handleClick = () => {
    if (count === 0){
      addItem(product)
    }
  }

  useEffect(() => {
    setCount(cart.find(item => item.product.id === product.id)?.qnt || 0)
  }, [cart])
  

  return (
    <S.Container active={count !== 0} onClick={handleClick}>
      <S.WrapperIcon>
        <S.Icon src="/icons/ShoppingBag.svg" alt="Sacola de compras" />
        <span>{count}</span>
      </S.WrapperIcon>
      <S.Title>{count === 0 ? 'ADICIONAR AO CARRINHO' : 'ITEM ADICIONADO'}</S.Title>
    </S.Container>
  )
}

export default ButtonAddItem