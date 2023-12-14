import React, { useEffect } from "react";
import data from '../data/product.json'
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../redux/actions";
export default function Products() {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch()
  console.log(cart)
  useEffect(() => {

  },[])
  
  return (
    <>
    <div>Product {Object.keys(cart).length}</div>
    <div className="flex flex-wrap gap-3 justify-center">
    
    {data.map(product => {
    
    return (
      <div key={product?.id} className="flex bg-[royalblue] rounded-lg items-center text-white flex-col p-3 relative w-[300px]">
        <div className="absolute top-2 right-2">{product?.availability}</div>
        <img
        className="w-[200px] h-[200px] bg-white text-[royalblue] rounded-full"
  src={`https://api.dicebear.com/7.x/icons/svg?seed=${product?.name}`}
  alt="avatar" />
        <div className="text-lg font-bold underline">{product?.name}</div>
        <div className="text-sm text-center ">{product?.description}</div>
        <div>{product?.category}</div>
        <div>{product?.availability}</div>
        <div className="text-lg bg-white px-3 rounded-sm text-[royalblue] font-bold">$ {product?.price}</div>
        <div onClick={() => {dispatch({type: ADD_TO_CART, payload: product})}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

        </div>
        </div>

    )
  })}</div>
  
  </>
  )
}
