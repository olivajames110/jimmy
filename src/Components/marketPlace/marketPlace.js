import React from 'react';
import { Link } from "react-router-dom";

import "./marketPlace.css"

const MarketPlace = () => {
 return (
  <div className="blog-page">
    <div className="blog-header">
     <div className="container">
      <div className="interior-page-header"> 
       <h1 className="interior-header">Marketplace</h1>
       <p className="interior-sub-header">Stay up to date with the latest news from our marketing experts. </p>
      </div>  
     </div>
   </div>

   <div className="marketplace-search">
    <div className="marketplace-search-text-area">
     <h1 className="marketplace-search-text">I would like to look for:</h1>
     <input className="marketplace-search-input"/> <i class="fa fa-search"></i>
    </div>
   </div>
   
   <div className="interior-page-content">
    <div className="container">
     <div className="marketplace-content-holder"> 
      <div className="marketplace-card-box">
        <div className="marketplace-card-image marketplace-card-img-oo"></div>
         <div className="marketplace-card-content">
          <div className="marketplace-header"> 
            <div className="marketplace-card-title">Online Ordering</div>
            <div className="marketplace-price"> $99 per month </div>
          </div>
          <div className="marketplace-card-desc"> 
            <div>Enhance your online traffic and allow your customers to place orders directly from your website</div>
          </div>
 
          <div className="market-place-price-and-contact">
            <div className="marketplace-contact"> 
              <button className="marketplace-contact-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="marketplace-card-box">
      <div className="marketplace-card-image marketplace-card-img-website"></div>
       <div className="marketplace-card-content">
        <div className="marketplace-header"> 
          <div className="marketplace-card-title">Website Design</div>
          <div className="marketplace-price"> $99 per month </div>
        </div>
        <div className="marketplace-card-desc"> 
          <div>Enhance your online traffic and allow your customers to place orders directly from your website</div>
        </div>

        <div className="market-place-price-and-contact">
          <div className="marketplace-contact"> 
            <button className="marketplace-contact-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    <div className="marketplace-card-box">
    <div className="marketplace-card-image marketplace-card-img-logo"></div>
     <div className="marketplace-card-content">
      <div className="marketplace-header"> 
        <div className="marketplace-card-title">Logo Design</div>
        <div className="marketplace-price"> $99 per month </div>
      </div>
      <div className="marketplace-card-desc"> 
        <div>Enhance your online traffic and allow your customers to place orders directly from your website</div>
      </div>

      <div className="market-place-price-and-contact">
        <div className="marketplace-contact"> 
          <button className="marketplace-contact-btn">Learn More</button>
        </div>
      </div>
    </div>
  </div>

  <div className="marketplace-card-box">
  <div className="marketplace-card-image marketplace-card-img-sh"></div>
   <div className="marketplace-card-content">
    <div className="marketplace-header"> 
      <div className="marketplace-card-title">Social Hub</div>
      <div className="marketplace-price"> $99 per month </div>
    </div>
    <div className="marketplace-card-desc"> 
      <div>Enhance your online traffic and allow your customers to place orders directly from your website</div>
    </div>

    <div className="market-place-price-and-contact">
      <div className="marketplace-contact"> 
        <button className="marketplace-contact-btn">Learn More</button>
      </div>
    </div>
  </div>
</div>



     </div>

      
     </div>
    </div>
   </div>
 )
}

export default MarketPlace;