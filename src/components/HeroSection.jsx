import React from 'react';
import { useState } from 'react';

const HeroSection = ({ ImageProduct1, ImageProduct1Thumbnail, ImageProduct2, ImageProduct2Thumbnail, ImageProduct3, ImageProduct3Thumbnail, ImageProduct4, ImageProduct4Thumbnail, IconPlus, IconMinus, IconCart, IconClose, IconPrevious, IconNext, productValue, decreaseProductValue, increaseProductValue, addToCart }) => {
  const [imageShow, setImageShow] = useState(ImageProduct1);
  const [imageShowLightBox, setImageShowLightBox] = useState(ImageProduct1);
  let [counter, setCounter] = useState(0);

  const firstImageDisplay = () => {
    setImageShow(ImageProduct1)
  }

  const secondImageDisplay = () => {
    setImageShow(ImageProduct2)
  }

  const thirdImageDisplay = () => {
    setImageShow(ImageProduct3)
  }

  const fourthImageDisplay = () => {
    setImageShow(ImageProduct4)
  }

  const firstImageDisplayLightBox = () => {
    setImageShowLightBox(ImageProduct1)
  }

  const secondImageDisplayLightBox = () => {
    setImageShowLightBox(ImageProduct2)
  }

  const thirdImageDisplayLightBox = () => {
    setImageShowLightBox(ImageProduct3)
  }

  const fourthImageDisplayLightBox = () => {
    setImageShowLightBox(ImageProduct4)
  }

  let value = [
    ImageProduct1,
    ImageProduct2,
    ImageProduct3,
    ImageProduct4
  ]

  const prevImaglightBox = () => {
    if (counter < 1) {
      return;
    }
    else {
    setImageShowLightBox(value[counter - 1]);
    setCounter(prev => prev - 1)
    }
  }

  const nextImaglightBox = () => {
    if (counter > 2) {
      return;
    }
    setCounter(prev => prev + 1)
    setImageShowLightBox(value[counter + 1]);
  };

  const closeThumbnailContainer = () => {
    document.querySelector('.lightbox-container').classList.remove('active');
  }
  const showThumbnailContainer = () => {
    document.querySelector('.lightbox-container').classList.add('active');
  }

  return (
    <section className='hero-section'>
      <div className='product-display'>
        <div className='product-image-display'>
            <img src={imageShow} onClick ={showThumbnailContainer} />
        </div>
        <div className='thumbnails'>
          <img src = {ImageProduct1Thumbnail} onClick ={firstImageDisplay}/>
          <img src = {ImageProduct2Thumbnail} onClick ={secondImageDisplay}/>
          <img src = {ImageProduct3Thumbnail} onClick ={thirdImageDisplay}/>
          <img src = {ImageProduct4Thumbnail} onClick ={fourthImageDisplay}/>
        </div>
        <div className='lightbox-container'>
          <div className='thumbnail-close-container' onClick = {closeThumbnailContainer}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="hsl(0, 0%, 100%)" fillRule="evenodd"/></svg>
          </div>
          <div className='lightbox-thumbnail'>
            <img src={imageShowLightBox} />
            <div className='next-prev-thumbnail'>
              <div className='svg-left' onClick={prevImaglightBox}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
              </div>
              <div className='svg-right' onClick={nextImaglightBox}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
              </div>
            </div>
          </div>
          <div className='light-thumbnail-small-images'>
            <img src = {ImageProduct1Thumbnail} onClick ={firstImageDisplayLightBox}/>
            <img src = {ImageProduct2Thumbnail} onClick ={secondImageDisplayLightBox}/>
            <img src = {ImageProduct3Thumbnail} onClick ={thirdImageDisplayLightBox}/>
            <img src = {ImageProduct4Thumbnail} onClick ={fourthImageDisplayLightBox}/>
          </div>
        </div>
      </div>
      <div className='product-content'>
        <h2>SNEAKER COMPANY</h2>
        <h1>Fall Limited Edition Sneaker</h1>
        <p>
          These low-profile sneakers are your casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className="price">
          <div className = "price-flex">
            <h1>$125.00</h1>
            <h3>50%</h3>
          </div>
          <p>$250.00</p>
        </div>
        <div className='button-div'>
          <div className='product-price-changer'>
            <img src={IconMinus} onClick ={decreaseProductValue} />
            <p>{productValue}</p>
            <img src = {IconPlus} onClick = {increaseProductValue} />
          </div>
          <button type='button' onClick={addToCart}>
            <img src={IconCart} />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
