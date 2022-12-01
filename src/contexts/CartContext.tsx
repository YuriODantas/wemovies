import { createContext, FC, useEffect, useState } from 'react'
import { Products } from '../services/products'

type Cart = {
  id: number
  product: Products
  qnt: number
  subtotal: number
}

type CartContextType = {
  cart: Cart[]
  addItem: (product: Products) => void
  changeItem: (qnt: number, id: number) => void
  removeItem: (id: number) => void
  countItems: number
  total: number
  clean: () => void
}

export const CartContext = createContext({} as CartContextType)

interface IProps {
  children: React.ReactNode
}

export const CartProvider: FC<IProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([])
  const [total, setTotal] = useState(0)

  const countItems = cart.length

  const addItem = (product: Products) => {
    setCart([...cart, {
      id: 0,
      product,
      qnt: 1,
      subtotal: product.price
    }])
  }

  const changeItem = (qnt: number, id: number) => {
    let newQnt = qnt

    if (qnt <= 0) {
      newQnt = 1
    }

    if (qnt >= 20) {
      newQnt = 20
    }

    if (isNaN(qnt)){
      newQnt = cart.find(item => item.product.id === id)?.qnt || 0
    }

    setCart(cart.map(item => item.product.id === id ? { ...item, qnt: newQnt, subtotal: item.product.price * newQnt} : item))
  }

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.product.id !== id))
  }

  const calcTotal = () => {
    let newTotal = 0
    for (const key in cart) {
      newTotal += cart[key].subtotal
    }
    setTotal(newTotal)
  }

  const clean = () => {
    setCart([])
  }

  useEffect(() => {
    calcTotal()
  }, [cart])
  

  return (
    <CartContext.Provider
      value={{
        cart,
        countItems,
        addItem,
        changeItem,
        removeItem,
        total,
        clean
      }}
    >
      {children}
    </CartContext.Provider>
  )
}