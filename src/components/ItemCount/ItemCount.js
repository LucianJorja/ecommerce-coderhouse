import React from "react";
import "./itemCount.css";


const ItemCount = () => {
    return (
        <div className="counter">
            <button className="button">-</button>
            <span className="number">1</span>
            <button className="button">+</button>
            <div>
                <button className="addToCart">Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;