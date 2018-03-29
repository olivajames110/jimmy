import React from 'react';
import { Link } from "react-router-dom";

import "./blog.css"

const Blog = () => {
 return (
  <div className="blog-page">
    <div className="blog-header">
     <div className="container">
      <div className="interior-page-header"> 
       <h1 className="interior-header">Marketing Blog</h1>
       <p className="interior-sub-header">Stay up to date with the latest news from our marketing experts. </p>
      </div>  
     </div>
   </div>

   <div className="blog-navigation">
    <div>
     <ul  className=" interior-nav-links">
      <Link to="/marketing-material" style={{ textDecoration: 'none' }}>
       <li>Home</li>
      </Link> 
      <li>Marketing Central</li>
      <li>Tip & Tricks</li>
      <li>Newsletter Ideas</li>
      <Link to="/marketing-material-blog" style={{ textDecoration: 'none' }}>
        <li  className="interior-nav-links-active">Blog</li>
      </Link>
     </ul>
    </div>
   </div>
   
   <div className="interior-page-content">
    <div className="container">
     <div className="blog-content-holder"> 

      <div className="blog-card-box">
       <div className="blog-body">
         <div className="marketing-welcome-image social-hub-tips-image">
         </div>
         <div className="blog-info">
          <div className="blog-title">
           <h3>Increasing Your Online Presence</h3>
          </div> 
          <div className="interior-content-sub-header">March 22th, 2018</div>
           <p class="blog-preview">With Spring comes change, and your menu offerings are no exception. Health aside, it’s important to rotate what you offer depending on what’s in season in order to give your dishes that fresh taste, boost of flavor, and colorful appearance. Plus, advertising new menu items is a sure way to pique interest and draw in customers. Giving your entire menu a makeover can benefit you in more ways than you might think (more on this later), but if you </p>
          <button className="blog-read-more">Read More</button>
        </div>
       </div>
      </div>

      <div className="blog-card-box">
      <div className="marketing-welcome-message-body">
        <div className="marketing-welcome-image social-hub-tips-image">
        </div>
        <div className="blog-info">
         <div className="blog-title">
          <h3>Increasing Your Online Presence</h3>
         </div> 
         <div className="interior-content-sub-header">March 22th, 2018</div>
          <p class="blog-preview">With Spring comes change, and your menu offerings are no exception. Health aside, it’s important to rotate what you offer depending on what’s in season in order to give your dishes that fresh taste, boost of flavor, and colorful appearance. Plus, advertising new menu items is a sure way to pique interest and draw in customers. Giving your entire menu a makeover can benefit you in more ways than you might think (more on this later), but if you </p>
         <button>Read More</button>
       </div>
      </div>
     </div>

     <div className="blog-card-box">
     <div className="marketing-welcome-message-body">
       <div className="marketing-welcome-image social-hub-tips-image">
       </div>
       <div className="blog-info">
        <div className="blog-title">
         <h3>Increasing Your Online Presence</h3>
        </div> 
        <div className="interior-content-sub-header">March 22th, 2018</div>
         <p class="blog-preview">With Spring comes change, and your menu offerings are no exception. Health aside, it’s important to rotate what you offer depending on what’s in season in order to give your dishes that fresh taste, boost of flavor, and colorful appearance. Plus, advertising new menu items is a sure way to pique interest and draw in customers. Giving your entire menu a makeover can benefit you in more ways than you might think (more on this later), but if you </p>
        <button>Read More</button>
      </div>
     </div>
    </div>

    <div className="blog-card-box">
    <div className="marketing-welcome-message-body">
      <div className="marketing-welcome-image social-hub-tips-image">
      </div>
      <div className="blog-info">
       <div className="blog-title">
        <h3>Increasing Your Online Presence</h3>
       </div> 
       <div className="interior-content-sub-header">March 22th, 2018</div>
        <p class="blog-preview">With Spring comes change, and your menu offerings are no exception. Health aside, it’s important to rotate what you offer depending on what’s in season in order to give your dishes that fresh taste, boost of flavor, and colorful appearance. Plus, advertising new menu items is a sure way to pique interest and draw in customers. Giving your entire menu a makeover can benefit you in more ways than you might think (more on this later), but if you </p>
       <button>Read More</button>
     </div>
    </div>
   </div>
      
     </div>
    </div>
   </div>
  </div>
 )
}

export default Blog;