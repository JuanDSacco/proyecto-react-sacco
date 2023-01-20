import ItemListContainer from './components/routes/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import Home from './components/Home/Home';
import ItemDetailContainer from './components/routes/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/routes/Cart/Cart';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Form from './components/routes/Form/Form';

function App() {
  return (

    <CartProvider>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/productos" element={<ItemListContainer/>}></Route>
            <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}></Route>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/form" element={<Form/>}></Route>
          </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
