import { FC } from 'react'
import * as S from './styles'

interface IProps {
  src: string
  alt: string
}

const Image: FC<IProps> = ({ src, alt }) => {
  return (
    <S.Container src={src} alt={alt} />
  )
}

export default Image