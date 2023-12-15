# rufs
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Checkout() {
  const globalState = useSelector((state) => state);
  let payNow = e => {
    e.preventDefault()
  }
  
  
  return (
    <div>
      Checkout
      <hr />
      <div className="flex justify-around gap-5 p-3">
        <div className=" w-full">
          <div>
            <div className="text-gray-400">Pay PSX</div>
            <div className="font-semibold text-3xl">
            $ {Math.round(Object.keys(globalState.cart).reduce((overAllSum, current) => {
              
              return overAllSum + globalState?.cart[current]?.price * globalState?.cart[current]?.qty
            }, 0))}
            </div>
          </div>
          <table className="w-full text-right ">
        <thead className="capitalize">
          <tr>
            <th className="text-left"> name </th>
            <th> unit price * quantity </th>
            <th> net price </th>
          </tr>
        </thead>
        <tbody >
          {Object.keys(globalState.cart).map((itemKey, counterKey) => (
            <tr key={itemKey}>
              <td className="text-left font-semibold">{globalState?.cart[itemKey]?.name}</td>
              <td className="text-right">$ {globalState?.cart[itemKey]?.price} x {globalState?.cart[itemKey]?.qty}</td>
              <td className="font-bold text-right ">
                $ {globalState?.cart[itemKey]?.qty *
                  globalState?.cart[itemKey]?.price}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
          {/* {Object.keys(globalState.cart).map((itemKey, counterKey) => (
            <div className="flex gap-3 py-1  px-2  justify-between" key={itemKey}>
              <div >{globalState?.cart[itemKey]?.name}</div>
              <div className="font-bold">$ {globalState?.cart[itemKey]?.price}</div>
              <div className="font-bold"> {globalState?.cart[itemKey]?.qty}</div>
            
            </div>
          ))} */}
        </div>
        <div>
          <form className="w-[400px] p-3  rounded-lg  bg-slate-50 shadow-lg my-3" onSubmit={(e) => {
            e.preventDefault()
          }}>
            <h1 className="font-bold text-2xl my-3">Pay with card</h1>
            <div className="py-3   font-bold flex flex-col">
              <label htmlFor="email">Email</label>
              <input className=" border-2 border-sliver-400  p-3 rounded-lg " type="email" name="email" id="email" />
              </div>
              <div className="py-3   font-bold flex flex-col gap-3">
              <label htmlFor="cart-info">Card Information</label>
              <input className=" border-2 border-sliver-400  p-3 rounded-lg " placeholder="1234 1234 1234 " type="text" name="cart-info" id="cart-info" />
              <div className="grid gap-3 grid-cols-2">
                              <input className=" border-2 border-sliver-400  p-3 rounded-lg " type="date" placeholder="MM / YY" name="date" id="date" />
              <input className=" border-2 border-sliver-400  p-3 rounded-lg " type="number" name="cvc" maxLength={4} id="cvc" placeholder="CVC" />
              </div>
              </div>
              <div className="py-3   font-bold flex flex-col">
              <label htmlFor="cardholder-name">Cardholder name</label>
              <input className=" border-2 border-sliver-400  p-3 rounded-lg " placeholder="Full name on card" type="text" name="cardholder-name" id="cardholder-name" />
              </div>
              <div className="py-3 gap-3   font-bold flex flex-col">
              <label htmlFor="email">Country or region</label>
              <div className="flex gap-3 flex-col">
              <input className=" border-2 border-sliver-400  p-3 rounded-lg " type="text" name="country" id="country" />
              <input className=" border-2 border-sliver-400  p-3 rounded-lg " type="text" name="zip" id="zip" />
              </div>
              </div>
              <button className="w-full bg-blue-400  p-3 rounded-lg my-3" type="submit">Pay</button>
          </form>
        </div>
      </div>
      
      {/* <table>
        <thead>
          <tr>
            <th> # </th>
            <th> name </th>
            <th> price </th>
            <th> quantity </th>
            <th> net price </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(globalState.cart).map((itemKey, counterKey) => (
            <tr key={itemKey}>
              <td>{counterKey + 1}</td>
              <td>{globalState?.cart[itemKey]?.name}</td>
              <td>{globalState?.cart[itemKey]?.price}</td>
              <td>{globalState?.cart[itemKey]?.qty}</td>
              <td>
                {globalState?.cart[itemKey]?.qty *
                  globalState?.cart[itemKey]?.price}
              </td>
            </tr>
          ))}

          <tr className="border-t-orange-300 border-[1px]">
            <td colSpan={"4"}></td>
            <td>400</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
