import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./itemListContainer.css"

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
            price: 6200,
            size: "XL",
            img: "../img/Remerarosa.png",
            category: 'remeras',
        },
        {
            id: 4,
            name: "Pantalón negro",
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
        },
];


    const ItemListContainer = ({}) => {
        const[data, setData] = useState([]);

        const {categoryId} = useParams();

        useEffect(()=>{
            const getData = new Promise(resolve =>{
                setTimeout(() => {
                    resolve(products);
                }, 1000);
            });
            
            if (categoryId) {
                getData.then(res => setData(res.filter(remera => remera.category === categoryId)));
            }else{
                getData.then(res => setData(res));
            }
            
        },[categoryId]);

        return (
            <div className='container'>
                <ItemList data={data} />
            </div>
        )


}
export default ItemListContainer;