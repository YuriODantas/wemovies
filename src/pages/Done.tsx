import { FC } from 'react'
import ButtonBack from '../components/ButtonBack'
import ContainerMessage from '../components/ContainerMessage'
import Message from '../components/Message'

const Done: FC = () => {
  return (
    <ContainerMessage>
      <Message>Compra realizada com sucesso!</Message>
      <img src="/icons/Done.svg" alt="Compra realizada" />
      <ButtonBack />
    </ContainerMessage>
  )
}

export default Done