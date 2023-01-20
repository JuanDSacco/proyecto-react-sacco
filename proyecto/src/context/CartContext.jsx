import React from 'react';
import {useContext ,useState} from 'react';

// Variable del contexto 
const CartContext = React.createContext([]);

// atajo donde entra el useContext y el Cartcontext
export const useCartContext = () => useContext(CartContext);


    const CartProvider = ( { children } ) => {

        const [cart , setCart] = useState([]);


        // Funciones 


            // Precio Total
            const totalPrice = () => {
                return cart.reduce((acc, data) => (acc += data.cantidad * data.precio), 0);
            };

            // Contador de productos para el cartwidget
            const cantidadItem = () => {
                return cart.reduce((acc, data) => (acc += data.cantidad), 0);
            };

            // Vaciar Carrito
            const clearCart = () => setCart([]);

            // remover producto
            const removeProduct = (id) => setCart(cart.filter((data) => data.id !== id));



            const eliminarPorUnidad = (id) =>

            setCart(
            cart.map((data) => {
                if (data.id === id) {
                return { ...data, cantidad: data.cantidad - 1 };
                } else {
                return data;
                }
            })
            );
              // Esta en carrito ? 
                const isInCart = (id) => (cart.find((data) => data.id === id) ? true : false);



                // aGREGAR PRODUCTO
                const addProduct = (item, cantidad) => {
                    if (isInCart(item.id)) {
                    setCart(
                        cart.map((data) => {
                        return data.id === item.id
                            ? { ...data, cantidad: data.cantidad + cantidad }
                            : data;
                        })
                    );
                    } else {
                    setCart([...cart, { ...item, cantidad }]);
                    }
                };



        return(
            <CartContext.Provider value={{
                addProduct,
                removeProduct,
                clearCart,
                totalPrice,
                eliminarPorUnidad,
                cart,
                cantidadItem,
                
            }}>
                { children }
            </CartContext.Provider>
        )
    }

export default CartProvider;