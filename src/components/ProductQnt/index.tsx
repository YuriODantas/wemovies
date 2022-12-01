import { FC, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import * as S from './styles'

interface IProps {
  qnt: number
  id: number
}

const ProductQnt: FC<IProps> = ({ qnt, id }) => {
  const { changeItem } = useContext(CartContext)

  const handleChange = (value: string) => {
    changeItem(parseInt(value), id)
  }

  return (
    <S.Container>
      <S.Button onClick={() => changeItem(qnt - 1, id)}>
        <img src="/icons/ButtonRemoveItem.svg" alt="Remover item" />
      </S.Button>
      <S.Input type="text" value={qnt} onChange={(e) => handleChange(e.target.value)} />
      <S.Button onClick={() => changeItem(qnt + 1, id)}>
        <img src="/icons/ButtonAddItem.svg" alt="Adicionar item" />
      </S.Button>
    </S.Container>
  )
}

export default ProductQnt