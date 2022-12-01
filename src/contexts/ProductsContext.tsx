import { createContext, FC, useEffect, useState } from 'react'
import { getProducts, Products } from '../services/products'

type ProductsContextType = {
  products: Products[]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface IProps {
  children: React.ReactNode
}

export const ProductsProvider: FC<IProps> = ({ children }) => {
  const [products, setProducts] = useState<Products[]>([])

  const listProducts = async () => {
    try {
      const { data } = await getProducts()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (products.length === 0){
      listProducts()
    }
  }, [products])

  return (
    <ProductsContext.Provider
      value={{
        products
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}