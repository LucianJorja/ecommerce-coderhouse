import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./cart.css"
const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (!cart.length){
        return (
            <div className="warning">
                <p>No hay ningún producto en el carrito!</p>
                <Link className="route" to="/">Volver al inicio</Link>
            </div>
        )
    } else {
        return (
            <div className="purchase">
            {cart.map(product => <ItemCart key={product.id} product={product}/>)}
            <p className="total">Total: ${totalPrice()}</p>
            <Link className="checkout" to="/checkout">Continuar compra</Link>
            </div>
        )
    }
    
}

export default Cart;