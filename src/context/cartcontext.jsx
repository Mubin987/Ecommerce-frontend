import { createContext, useState } from "react";

const CartContext = createContext({});//empty object initial value

export const CartContainer = (props) =>{
    const [cartItems,setcartItems] = useState([]);
    
    const addTocart = (newItem) =>{
        const flag = cartItems.find((item)=>item.name === newItem.name)
        if(flag){
            return;
        }
        const items = [...cartItems,newItem]
        setcartItems(items);
    }

    const removeFromcart = (productName) =>{
        const filteredItems = cartItems.filter((item)=>item.name !== productName)
        setcartItems(filteredItems)
    }
    
    return(
        <CartContext.Provider value={{cartItems,addTocart,removeFromcart}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext;