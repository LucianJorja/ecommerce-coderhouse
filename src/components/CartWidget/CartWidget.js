import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "../../context/CartContext";


const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
        <div className="shop-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span id='cart-counter'>{totalProducts() || ''} </span>
        </div>
    )
    

}
export default CartWidget;
