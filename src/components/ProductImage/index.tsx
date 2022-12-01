import React, { FC } from 'react'
import * as S from './styles'

interface IProps {
  image: string
  title: string
}

const ProductImage: FC<IProps> = ({ image, title }) => {
  return (
    <S.Container src={image} alt={title} />
  )
}

export default ProductImage