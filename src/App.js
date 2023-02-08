import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { useState } from "react";

// Imports

import IconCart from "../src/images/icon-cart.svg";
import IconClose from "../src/images/icon-close.svg";
import IconDelete from "../src/images/icon-delete.svg";
import IconMenu from "../src/images/icon-menu.svg";
import IconMinus from "../src/images/icon-minus.svg";
import IconNext from "../src/images/icon-next.svg";
import IconPlus from "../src/images/icon-plus.svg";
import IconPrevious from "../src/images/icon-previous.svg";
import ImageAvatar from "../src/images/image-avatar.png";
import ImageProduct1Thumbnail from "../src/images/image-product-1-thumbnail.jpg";
import ImageProduct1 from "../src/images/image-product-1.jpg";
import ImageProduct2Thumbnail from "../src/images/image-product-2-thumbnail.jpg";
import ImageProduct2 from "../src/images/image-product-2.jpg";
import ImageProduct3Thumbnail from "../src/images/image-product-3-thumbnail.jpg";
import ImageProduct3 from "../src/images/image-product-3.jpg";
import ImageProduct4Thumbnail from "../src/images/image-product-4-thumbnail.jpg";
import ImageProduct4 from "../src/images/image-product-4.jpg";
import Logo from "../src/images/logo.svg";

const App = () => {
  const [productValue, setProductValue] = useState(0);
  const [cartProductValue, setCartProductValue] = useState(0);
  
  const decreaseProductValue = () => {
    if (productValue > 0) {
      setProductValue(productValue - 1)
    }
  }

  const increaseProductValue = () => {
    setProductValue(productValue + 1)
  }

  const addToCart = () => {
    setCartProductValue(productValue);
  }

  return (
    <div className="App">
      <Navbar IconMenu = {IconMenu} IconClose = {IconClose} Logo={Logo} IconCart={IconCart} ImageAvatar={ImageAvatar} ImageProduct1={ImageProduct1} IconDelete={IconDelete} cartProductValue={cartProductValue} setCartProductValue={setCartProductValue} />
      <HeroSection ImageProduct1={ImageProduct1} ImageProduct1Thumbnail={ImageProduct1Thumbnail} ImageProduct2={ImageProduct2} ImageProduct2Thumbnail={ImageProduct2Thumbnail}
      ImageProduct3 = {ImageProduct3}  ImageProduct3Thumbnail={ImageProduct3Thumbnail} ImageProduct4={ImageProduct4} ImageProduct4Thumbnail={ImageProduct4Thumbnail} IconPlus = {IconPlus} IconMinus = {IconMinus} IconCart = {IconCart} IconClose = {IconClose} IconPrevious = {IconPrevious} IconNext = {IconNext} productValue = {productValue} setProductValue = {setProductValue} decreaseProductValue = {decreaseProductValue} increaseProductValue = {increaseProductValue} addToCart = {addToCart} />
    </div>
  );
}

export default App;
