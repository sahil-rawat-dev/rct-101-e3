import React, {useState,useEffect}from "react";
import axios from "axios";
import Product from "./Product/Product"
const Products = () => {
  const [products,setProduct]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/products").then(({data})=>{
      setProduct(data)
    })
  },[])
  return (
    <div>
    <h1>product</h1>
    <div>{products.map((product)=>(<Product/>))}</div>
    </div>
    );
};

export default Products;
