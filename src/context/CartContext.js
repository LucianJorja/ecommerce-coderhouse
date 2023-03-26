import React, { useContext, useState } from "react";
const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children} ) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (alreadyInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const totalPrice = () =>{
        return cart.reduce((prev, item) => prev + item.quantity * item.price, 0);
    };

    const totalProducts = () =>{
        return  cart.reduce((acc, item) => acc + item.quantity, 0);
    }
    const alreadyInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    };   

    const removeProduct = (id) => {
        const updatedCart = [...cart];
        const productIndex = updatedCart.findIndex((product) => product.id === id);
    
        if (productIndex >= 0) {
            const product = updatedCart[productIndex];
            if (product.quantity > 1) {
            product.quantity -= 1;
            } else {
            updatedCart.splice(productIndex, 1);
        }
        setCart(updatedCart);
        }
    };
    
    return (
        <CartContext.Provider value={{
            alreadyInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
