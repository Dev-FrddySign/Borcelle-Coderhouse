import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config'


const useGetData = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getProducts = async () => {
            try {
                const col = collection(db, "Productos")
                const data = await getDocs(col)
                const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
                setProducts(result)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        getProducts();
    }, [])

    return { products, loading }

};              

export default useGetData;