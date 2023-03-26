import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "../../context/CartContext";
import "./itemcart.css";

const ItemCart = ({product}) =>{
    const {removeProduct} = useCartContext();
    return (
        <div className="cart-view">
            <img className="pic" src={product.image} alt={product.name}/>
            <div className="items__info">
                <p className="product-name">{product.name}</p>
                <p className="info">Cantidad: {product.quantity}</p>
                <p className="info">$ {product.price}</p>
                <p className="info">Subtotal: ${product.quantity * product.price }</p>
                <button className="trash-can" onClick={() => removeProduct(product.id)}><FontAwesomeIcon icon={faTrash} size="lg"/></button>
            </div>
        </div>
    )
}

export default ItemCart;