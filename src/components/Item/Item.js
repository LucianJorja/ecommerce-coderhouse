import React from "react";
import { Link } from "react-router-dom";
import "./item.css";
// import { useCartContext } from "../../context/CartContext";

const Item = ({ info }) =>{
    
    return(
        <Link to={`/detalle/${info.id}`} className="product">
            <img src={info.image} alt="" className="image"></img>
            <div>
                <p>{info.name}</p>
                <p>${info.price}</p>
            </div>
        </Link>
    )
}

export default Item;