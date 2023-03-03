import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";


const ItemDetail = ({data}) =>{
    return(
        <div className="div-container">
            <div className="detail">
                <img className="detail__image" src={data.img} atl=""/>
                <div className="content">
                    <h1 className="name">{data.name}</h1>
                    <h2 className="price">${data.price}</h2>
                    <h3 className="size">Talle:  {data.size}</h3>
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;
