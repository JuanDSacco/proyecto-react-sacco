import { useState } from "react";
import './itemDetail.css' 
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../../context/CartContext";


function ItemDetail ({ data }) {
    //const [goToCart, setGoToCart] = useState(false)
    // Desestructuacion del contexto 
    const { addProduct } = useCartContext();


    const onAdd = ( contador ) => {
        // FUNCIONES  indicar los parametros del producto que llegue y su cantidad
        //setGoToCart(true)
        addProduct(data,contador)
    }

    return (
        
        <div className="detail-conteiner">
            <div className="detail-item-container">
                <h3 className="titulo-detail">{data.titulo}</h3>
                <img className="imgF" src={data.imagen} alt={data.imagen}></img>
                <p className="detalle-precio">${data.precio}</p>
                <ItemCount data={data} onAdd={onAdd} cantidad={data.cantidad}/>
            </div>
        </div>
    )
}; 

export default ItemDetail;



