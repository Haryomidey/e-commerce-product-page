import React, { useState } from 'react';
import CartBox from './CartBox';

const Navbar = ({ IconMenu, IconClose, Logo, IconCart, ImageAvatar, ImageProduct1, IconDelete, cartProductValue, setCartProductValue }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleCartBox = () => {
    setIsActive(!isActive);
  }

  const showNavbar = () => {
    document.querySelector('.nav').classList.add('active');
    document.querySelector('.open-icon').classList.add('active');
    document.querySelector('.close-icon').classList.add('active');
  }

    const hideNavbar = () => {
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.open-icon').classList.remove('active');
    document.querySelector('.close-icon').classList.remove('active');
  }

  return (
    <header className="header">
      <div className='header-content'>
        <div className='hamburger-menu'>
          <img src={IconMenu} className = "open-icon" onClick={showNavbar}/>
          <img src={IconClose} className = "close-icon" onClick={hideNavbar}/>
        </div>
        <img src = { Logo } className = "logo-icon"/>
        <div className='nav-wrapper'>
          <nav className='nav'>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className='cart-and-image-div'>
            <div className = "cart-icon-container" onClick = {toggleCartBox}>
              <img src={IconCart} className="cart-logo" />
              <p className="cart-item-number">{cartProductValue}</p>
            </div>
            <img src={ImageAvatar} className="profile-image" />
          </div>
        </div>
      </div>
      {isActive && <CartBox ImageProduct1={ImageProduct1} IconDelete = {IconDelete} cartProductValue = {cartProductValue} setCartProductValue = {setCartProductValue} />}
    </header>
  )
}

export default Navbar;
