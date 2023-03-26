import React, { useState, useEffect} from "react";
import "./itemCount.css";


const ItemCount = ({initial, stock,onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }
    
    useEffect(()=>{
        setCount(parseInt(initial))
    },[initial])

    return (
        <div className="counter">
            <button onClick={decrease} disabled={count<=1} className="button">-</button>
            <span className="number-counter">{count}</span>
            <button onClick={increase} disabled={count>= stock} className="button">+</button>
            <div>
                <button className="addToCart" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;