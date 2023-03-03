import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';


const products = [
        {
            id: 1,
            name: "Remera negra lisa",
            price: 4300,
            size: "XL",
            img: "../img/Remeranegra.png",
            category: 'remeras',
        },
        {
            id: 2,
            name: "Remera blanca",
            price: 5300,
            size: "XL",
            img: "../img/Remerablanca.png",
            category: 'remeras',
        },
        {
            id: 3,
            name: "Remera rosa",
            price: 5700,
            size: "XL",
            img: "../img/Remerarosa.png",
            category: 'remeras',
        },
        {
            id: 4,
            name: "Pantalón negro chino",
            price: 11550,
            size: "L",
            img: "../img/Pantalon.png",
            category: 'pantalones',
        },
        {
            id: 5,
            name: "Pantalón jean",
            price: 12100,
            size: "L",
            img: "../img/Jean.png",
            category: 'pantalones',
        },
        {
            id: 6,
            name: "Pantalón jogger negro",
            price: 13100,
            size: "L",
            img: "../img/Jogger.png",
            category: 'pantalones',
            desc: ""
        },
];


const ItemDetailContainer = () =>{
    const [data, setData] = useState({});
    const { detailId } = useParams();


    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        })
        getData.then(res => setData(res.find(product => product.id === parseInt(detailId))));
    },[])
    return (
        <ItemDetail data={data}/>
    )
};

export default ItemDetailContainer;