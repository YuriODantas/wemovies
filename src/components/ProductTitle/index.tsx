import { FC } from 'react'
import * as S from './styles'

interface IProps {
  title: string
}

const ProductTitle: FC<IProps> = ({ title }) => {
  return (
    <S.Container>{title}</S.Container>
  )
}

export default ProductTitle