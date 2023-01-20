import "./itemCount.css";
import { useState } from "react";

const ItemCount = ({ cantidad, onAdd }) => {
    const [contador, setContador] = useState(1);

    const buttonAument = () => {
        setContador(contador + 1);
    };

    const buttonDecrement = () => {
        contador > 0 ? setContador(contador - 1) : setContador(0);
    };

    const agregarProduct = () => {
        onAdd(contador);
    };

    return (
        <>
            <div className="count-contain">
                <button onClick={buttonDecrement} className="boton-hand">-</button>
                <button onClick={buttonAument} className="boton-hand">+</button>
                <p className="contador2">Cantidad : {contador}</p>
            </div>
            <button className="buttonCount" onClick={agregarProduct}>
                Añadir al carrito
            </button>
        </>
    );
};

export default ItemCount;