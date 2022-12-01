import { FC, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ProductDeleteItem from '../ProductDeleteItem'
import ProductImage from '../ProductImage'
import ProductPrice from '../ProductPrice'
import ProductQnt from '../ProductQnt'
import ProductSubTotal from '../ProductSubTotal'
import ProductTitle from '../ProductTitle'
import * as S from './styles'

const MobileListProducts: FC = () => {
  const { cart } = useContext(CartContext)
  return (
    <S.Container>
      {cart.map(item => (
        <S.Card key={item.product.id}>
          <ProductImage 
            title={item.product.title}
            image={item.product.image}
            />
          <S.WrapperTitleQnt>
            <ProductTitle
              title={item.product.title}
            />
            <ProductQnt
              qnt={item.qnt}
              id={item.product.id}
            />
          </S.WrapperTitleQnt>
          <div>
            <S.WrapperPriceDelete>
              <ProductPrice
                price={item.product.price}
              />
              <ProductDeleteItem
                id={item.product.id}
              />
            </S.WrapperPriceDelete>
            <ProductSubTotal
              subtotal={item.subtotal}
            />
          </div>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default MobileListProducts