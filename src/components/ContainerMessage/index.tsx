import React, { FC } from 'react'
import * as S from './styles'

interface IProps {
  children: React.ReactNode
}

const ContainerMessage: FC<IProps> = ({ children }) => {
  return (
    <S.Container>{children}</S.Container>
  )
}

export default ContainerMessage