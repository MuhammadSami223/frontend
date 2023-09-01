import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home/home';
import Product from './pages/product/product';
import ProductAdd from './ProductAdd/Addproduct';
import Navbar from './components/Navbar'
import Cart from './CartSection/AddedCart';
import { ProductContainer } from './context/productContext';
import { CartContainer } from './context/cartContext';
import Login from './pages/login';
import Editproduct from './pages/editProduct/Editproduct';
import Register from './register/register';
import Crousel from './components/Crousel';
function App() {
  return (
    <div>
    
      <CartContainer>
        <ProductContainer>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products/:id' element={<Product/>}/>
  <Route path='/products/edit/:id' element={<Editproduct/>}/>
  <Route path='/addproduct' element={<ProductAdd/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
    <Route path='/cart' element={<Cart/>}/>
</Routes>
</BrowserRouter>
        </ProductContainer>
      </CartContainer>

    </div>
  );
}

export default App;
