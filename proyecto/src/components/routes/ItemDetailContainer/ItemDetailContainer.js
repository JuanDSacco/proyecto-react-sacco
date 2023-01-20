import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc , getDoc } from 'firebase/firestore';




const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    // useParams return a string
    const { id } = useParams();
    
        useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'items', id);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
        
        }, [id]);
    
        return (
        <>
            <div className="div">
            <ItemDetail data={data} />
            </div>
        </>
        );
    };
    export default ItemDetailContainer;