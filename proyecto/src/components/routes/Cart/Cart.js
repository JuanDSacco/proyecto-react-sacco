import { Fragment } from "react";
import { useCartContext } from "../../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {

    const {removeProduct, clearCart, eliminarPorUnidad,totalPrice, cart  } = useCartContext();


    return (
        <>
            <div className='cart2'>
            {
                cart.length === 0 ? 
                <div className='vacio'>
                <h2>El carrito esta vacio</h2>
                </div>
                :
                <div className='cart-map'>
                {
                    cart.map((data, indice) => 
                    <div className="contain-card" key={indice}>
                        <div className="contain">
                            <div className="contain-card">
                                    <span className="">{data.titulo}</span>
                                    <span className="">${data.precio}</span>
                                    <img src={data.imagen} alt={data.id} className=""></img>
                                    <span>cantidad : {data.cantidad}</span>
                                    <div>
                                        <button className="decrease" disabled={data.cantidad <= 0 && removeProduct(data.id)} onClick={() => eliminarPorUnidad(data.id)} >Eliminar unidad  - </button>
                                    </div>
                            </div>
                        </div> 
                </div>
                )
                }
                <div>
                    <button className="vaciar-carrito" onClick={clearCart}>Vaciar Carrito</button>
                </div>
                <div>
                    <span className="precioTotal">Precio total : ${totalPrice()} </span>
                </div>
                <div>
                    <Link to='/form'><button className='continuar-compra'>Continuar</button></Link>
                </div>
                </div>
            }
            </div>
        </>
    )
    }
    


export default Cart; 