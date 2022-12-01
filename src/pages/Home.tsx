import { FC, useContext } from "react"
import CardItems from "../components/CardItems"
import { WrapperListItems } from "../components/WrapperListItems"
import { ProductsContext } from "../contexts/ProductsContext"

const Home: FC = () => {
  const { products } = useContext(ProductsContext)  

  return (
    <WrapperListItems>
      {products.map(product => (
        <CardItems key={product.id} product={product} />
      ))}
    </WrapperListItems>
  )
}

export default Home