import { FC } from 'react'
import * as S from './styles'

interface IProps {
  children: React.ReactNode
}

const Message: FC<IProps> = ({ children }) => {
  return (
    <S.Container>{children}</S.Container>
  )
}

export default Message