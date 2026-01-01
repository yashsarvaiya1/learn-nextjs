'use client'
import { useState } from "react"

export default function PriceComponent(){
    const [price,setPrice] = useState(10.00)
    const [quantity,setQuantity] = useState(1)
    const [discount,setDiscount] = useState(0)

    const subtotal = price * quantity
    const discountAmount = (subtotal * (discount/100))
    const finalTotal = subtotal - discountAmount

    return(
        <div className="space-y-4">
            <div>
                <label className="block font-bold">Product Price:</label>
                <input type="number" value={price} onChange={(e)=>setPrice(Number(e.target.value))} placeholder="Enter Price"/>
                <label className="block font-bold">Product QUantity: {quantity}</label>
                 <div className="flex"> 
                    <button onClick={()=>{setQuantity(q=>q+1)}}>+1</button>
                    <button onClick={()=>{if(quantity>1) setQuantity(q=>q-1)}}>-1</button>
                 </div>
                 <label className="block font-bold">Discount (Percentage):</label>
                 <input type="number" value={discount} onChange={(e)=>{setDiscount(Number(e.target.value))}} />
            </div>
            <div>
                <p>Based on values the calculations are:</p>
                <p>Subtotal: {subtotal.toFixed(2)}</p>
                <p>Discount percentage: {discount}%</p>
                <p>Discount: -{discountAmount.toFixed(2)}</p>
                <p>Final Amount: {finalTotal.toFixed(2)}</p>
            </div>
        </div>
    )
}
