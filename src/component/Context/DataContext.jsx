import { createContext, useState } from "react";
import useGetData from "../hook/useGetData";

export const dataContext = createContext();

const Dataprovider = ({children}) => {
    const [cart, setCart] = useState([]);
    const { products, loading } = useGetData();

    const buyProducts = (product) => {
        const productRepeat = cart.find ((item) => item.id === product.id);
        
        if(productRepeat){
            setCart(cart.map((item) => item.id === product.id ? {...product, quanty: 
                productRepeat.quanty + 1 } :item))
        }else {
            setCart([...cart, product]);
        }
    };

    return <dataContext.Provider 
    value={{
        cart, 
        setCart, 
        products, 
        loading,
        buyProducts,
    }}>{children}</dataContext.Provider>
};

export default Dataprovider;