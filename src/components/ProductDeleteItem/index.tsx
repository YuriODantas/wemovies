import { FC, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import * as S from './styles'

interface IProps {
  id: number
}

const ProductDeleteItem: FC<IProps> = ({ id }) => {
  const { removeItem } = useContext(CartContext)

  return (
    <S.Container onClick={() => removeItem(id)}>
      <img src="/icons/Bin.svg" alt="Apagar item" />
    </S.Container>
  )
}

export default ProductDeleteItem