import React,{useContext,useState,useEffect} from "react";
import { CartContext } from "../../../context/CartContext";
const Product = ({id,name,description}) => {
  // Note: this id should come from api
  const {
    getItem,addItem,removeItem,updateItem
  }=useContext(CartContext)
  const [count, setCount]=useState(0)
  const handleUp=async(newCount)=>{
    await updateItem(id,newCount)
    setCount(newCount)
  }
  const handleDelete=async()=>{
    await removeItem(id);
    setCount(0)
  }
  useEffect(()=>{
    if(id){
      setCount(getItem(id))
    }
  })
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>{
        addItem({
          productId:id,
          count:1,
        })
      }}>Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>handleUp(count+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>handleUp(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={handleDelete}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
