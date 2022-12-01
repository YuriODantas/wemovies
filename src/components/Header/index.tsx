import { FC } from 'react'
import ButtonCartMenu from '../ButtonCartMenu'
import * as S from './styles'

const Header : FC = () => {
  return (
    <S.Container>
      <S.Title to='/'>WeMovies</S.Title>
      <ButtonCartMenu />
    </S.Container>
  )
}

export default Header