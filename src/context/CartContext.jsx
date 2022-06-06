import React, { createContext,useState } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems,setCartItems]=useState([])
  const getItem=(productId)=> cartItems.find((item)=>item.productId===productId)||{}
  const addItem=async(cartInfo)=>{
    return axios
    .post("http://localhost:8080/cartItems", { ...cartInfo })
    .then(({ data }) => {
      setCartItems([...cartItems, data]);
    });
  }
  const removeItem=async(productId)=>{
    let item = getItem(productId);
    if (item.id) {
      return axios
        .delete(`http://localhost:8080/cartItems/${item.id}`)
        .then(() => {
          let updatedCartItems = cartItems.filter((cI) => cI.id !== item.id);
          setCartItems(updatedCartItems);
        });
    }
  }
  const updateItem=async(productId,newCount)=>{
    if(newCount===0){
      return removeItem(productId)
    }
   
  }
  return <CartContext.Provider value={{getItem,addItem,removeItem,updateItem}}>{children}</CartContext.Provider>;
};
