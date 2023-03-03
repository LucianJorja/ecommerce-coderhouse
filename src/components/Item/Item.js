import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) =>{
    return(
        <Link to={`/detalle/${info.id}`} className="product">
            <img src={info.img} alt="" className="image"></img>
            <div>
                <p >{info.name}</p>
                <p>${info.price}</p>
            </div>
        </Link>
    )
}

export default Item;