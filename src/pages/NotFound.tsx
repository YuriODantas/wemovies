import { FC } from 'react'
import ButtonBack from '../components/ButtonBack'
import ContainerMessage from '../components/ContainerMessage'
import Image from '../components/Image'
import Message from '../components/Message'

const NotFound: FC = () => {
  return (
    <ContainerMessage>
      <Message>Parece que não há nada por aqui :(</Message>
      <Image src="/icons/CartEmpty.svg" alt="Carrinho vazio" />
      <ButtonBack />
    </ContainerMessage>
  )
}

export default NotFound