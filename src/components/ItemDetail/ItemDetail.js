import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({data}) =>{
    const [goToCart, setGoToCart] =useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return(
        <div className="div-container">
            <div className="detail">
                <img className="detail__image" src={data.image} alt=""/>
                <div className="content">
                    <h1 className="name">{data.name}</h1>
                    <h2 className="price">${data.price}</h2>
                    <h3 className="size">Talle:  {data.size}</h3>
                    {goToCart ? <Link className="goToCart" to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd}/>}
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;
