import './cartWidget.css'
import { Link } from 'react-router-dom'; 
import Carrito from '../../assets/cart.png';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

const {cantidadItem} = useCartContext();

return (
    <div>
        <Link to='/cart'>
            <img src={Carrito} alt={Carrito} className="imagenCarrito" />
            <span>{parseInt(cantidadItem())}</span>
        </Link>
    </div>
)
}


export default CartWidget;
