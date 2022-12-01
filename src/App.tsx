import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { AppContainer } from './components/AppContainer'
import Header from './components/Header'
import Done from './pages/Done'
import { ProductsProvider } from './contexts/ProductsContext'
import { CartProvider } from './contexts/CartContext'

const App = () => {
  return (
    <AppContainer>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/done' element={<Done />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
          </div>
        </CartProvider>
      </ProductsProvider>
    </AppContainer>
  )
}

export default App
