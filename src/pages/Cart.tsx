import { FC, useContext } from "react"
import ButtonBack from "../components/ButtonBack"
import CartFooter from "../components/CartFooter"
import ContainerCart from "../components/ContainerCart"
import ContainerMessage from "../components/ContainerMessage"
import Image from "../components/Image"
import Message from "../components/Message"
import MobileListProducts from "../components/MobileListProducts"
import TableProducts from "../components/TableProducts"
import { CartContext } from "../contexts/CartContext"

const CartEmpty: FC = () => {
  return (
    <ContainerMessage>
      <Message>Parece que não há nada por aqui :(</Message>
      <Image src="/icons/CartEmpty.svg" alt="Carrinho vazio" />
      <ButtonBack />
    </ContainerMessage>
  )
}

const Cart: FC = () => {
  const { countItems } = useContext(CartContext)

  if (countItems === 0) {
    return <CartEmpty />
  }
  return (
    <ContainerCart>
      <TableProducts />
      <MobileListProducts />
      <CartFooter />
    </ContainerCart>
  )
}

export default Cart