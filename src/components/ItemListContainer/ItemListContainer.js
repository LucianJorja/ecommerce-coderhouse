import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./itemListContainer.css"
import { getFirestore, collection , getDocs, query, where} from "firebase/firestore";


    const ItemListContainer = () => {
        const[data, setData] = useState([]);

        const {categoryId} = useParams();

        useEffect(()=>{
            const qdb = getFirestore();
            const qCollection = collection(qdb, 'items');
            getDocs(qCollection)
            
            if (categoryId) {
                const qFilter = query(qCollection, where('category', '==', categoryId));
                getDocs(qFilter)
                    .then(res => setData(res.docs.map (product => ({id: product.id, ...product.data()}))))
            }else{
            getDocs(qCollection)
                .then(res => setData(res.docs.map (product => ({id: product.id, ...product.data()}))))
                
            }
            
        },[categoryId]);

        return (
            <div className='container'>
                <ItemList data={data} />
            </div>
        )


}
export default ItemListContainer;