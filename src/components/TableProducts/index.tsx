import { FC, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ProductDeleteItem from '../ProductDeleteItem'
import ProductImage from '../ProductImage'
import ProductPrice from '../ProductPrice'
import ProductQnt from '../ProductQnt'
import ProductSubTotal from '../ProductSubTotal'
import ProductTitle from '../ProductTitle'
import TableHeader from '../TableHeader'
import * as S from './styles'

const TableProducts: FC = () => {
  const { cart } = useContext(CartContext)
  return (
    <S.Container>
      <TableHeader />
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <ProductImage 
                title={item.product.title}
                image={item.product.image}
              />
              <S.WrapperTitle>
                <ProductTitle
                  title={item.product.title}
                />
                <ProductPrice
                  price={item.product.price}
                />
              </S.WrapperTitle>
            </td>
            <td>
              <ProductQnt
                qnt={item.qnt}
                id={item.product.id}
              />
            </td>
            <td>
              <ProductSubTotal
                subtotal={item.subtotal}
              />
            </td>
            <td>
              <ProductDeleteItem
                id={item.product.id}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </S.Container>
  )
}

export default TableProducts