import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
 const cartItems= useSelector((state)=>state.cart.items)
 console.log("hlooooo")
  return (
     <div className='flex flex-col items-center gap-3 p-2'>
      {
        cartItems.map((cartItem)=>(
          <article className='bg-blue-400 p-2 rounded-2xl text-white'  key={cartItem.id}>
              <h2>My Cart items</h2>
            <h1>Name:{cartItem.name}</h1>
            <p>Price:₹{cartItem.price}</p>
            <p>Quantity:{cartItem.quantity}</p>
          </article>
        ))
      }
    </div>
  )
}

export default CartPage