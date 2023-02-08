import React, { useState } from 'react';

const CartBox = ({ ImageProduct1, IconDelete, cartProductValue, setCartProductValue }) => {
  
  const [removeCart, setRemoveCart] = useState(cartProductValue);
  
  const CartItems = () => {
    return (
      <>
        <div className="cartbox-fill">
        <div className='cartbox-fill-inner'>
          <img src={ImageProduct1} className="cartbox-product-image" />
          <div className='cartbox-fill-text'>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125 x {`${cartProductValue}`} = <span><b>${cartProductValue * 125}</b></span></p>
          </div>
            <img src={IconDelete} onClick={() => {
              setCartProductValue(0)
          }} className = "delete-icon"/>
        </div>
        <div className='button-container'>
          <button>Checkout</button>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='cartbox'>
      <div className ="upper-section">
        <h2>Cart</h2>
      </div>
      { cartProductValue ? 
          <CartItems />
        :
        <div className="cartbox-empty">
          <p>Your cart is empty</p>
        </div>
      }
    </div>
  )
}

export default CartBox;
