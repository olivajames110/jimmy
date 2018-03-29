import React from 'react';
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";

import "./marketingMaterial.css"
import "./marketingMaterialImages.css";

const MarketingMaterial = () => {
 return (
  <div className="marketing-material-page">
    <div className="marketing-material-header">
     <div className="container">
      <div className="interior-page-header"> 
       <h1 className="interior-header">Marketing Material</h1>
       <p className="interior-sub-header">Discover new marketing ideas for your campaigns. </p>
      </div>  
     </div>
   </div>


   
   <div className="marketing-material-navigation">
    <div>
     <ul  className=" interior-nav-links">
      <Link to="/marketing-material" style={{ textDecoration: 'none' }}>
        <li className="interior-nav-links-active" >Home</li>
      </Link>
      <li>Marketing Central</li>
      <li>Tip & Tricks</li>
      <li>Newsletter Ideas</li>
      <Link to="/marketing-material-blog" style={{ textDecoration: 'none' }}>
        <li>Blog</li>
      </Link>
     </ul>
    </div>
   </div>
   
   <div className="interior-page-content">
    <div className="container">
     <div className="marketing-material-content-holder"> 
      <div className="marketing-material-container-box">
       <div className="marketing-welcome-message-header">
        <span><h3>Welcome Jimmy</h3></span> 
        <span className="interior-content-sub-header">Today's Date: Thursday, March 27th, 2018</span>
       </div>
       <div className="marketing-welcome-message-body">
        <div className="marketing-column item-one">
         <div className="marketing-welcome-image social-hub-tips-image " ></div>
         <div className="marketing-welcome-image-title ">SOCIAL HUB TIPS</div>
         <div className="marketing-welcome-image-desc ">Make the most out of your Social Hub experience and learn how to optimize your marketing techniques</div>
        </div>
        <div className="marketing-column item-two">
         <div className="marketing-welcome-image food-trends-image " ></div>
         <div className="marketing-welcome-image-title ">FOOD TRENDS</div>
         <div className="marketing-welcome-image-desc ">Discover some of the hottest upcoming food trends to capitalize on.</div>
        </div>
        <div className="marketing-column item-three">
         <div className="marketing-welcome-image upcoming-events-image " ></div>
         <div className="marketing-welcome-image-title ">UPCOMING HOLIDAYS</div>
         <div className="marketing-welcome-image-desc ">Drive more business more often by taking advantage of food related holidays.</div>
        </div>
       </div>
      </div>

      <div className="marketing-material-container-box">
       <div className="marketing-welcome-message-header">
        <span><h3>Upcoming Activities</h3></span>
       <div className="marketing-calendar-body">
       <Calendar />
       <button className="calendar-add-activity">Add Activity</button>
       </div>
       </div>
      </div>
     </div>

     <div className="marketing-material-container-box previous-activities">
      <div className="marketing-welcome-message-header">
        <span><h3>Get Inspired</h3></span>
        <p className="interior-content-sub-header">Effective Social Media Post Examples</p>
      </div>
      <div className="marketing-material-image-gallery-wrapper">
        <div className="image-style"><img src="https://www.matthewbarby.com/wp-content/uploads/2014/09/facebook-post.jpg" width="100%"/></div>
        <div className="image-style"><img src="https://kimgarst.com/wp-content/uploads/2015/01/Heyo-Behind-the-Scenes-Picture-Example.png"  width="100%" /></div>
        <div className="image-style"><img src="https://kimgarst.com/wp-content/uploads/2015/01/Facebook-Inspirational-Images-Example-Kim-Garst.png"   width="100%"/></div>
        <div className="image-style"><img src="https://kimgarst.com/wp-content/uploads/2015/01/DIY-Home-Decorating-Facebook-Tutorial-Example.png" width="100%" /></div>
        <div className="image-style"><img src="https://3jbq2ynuxa-flywheel.netdna-ssl.com/wp-content/uploads/2017/02/Blue-Apron-Facebook-ad-example-1.png" width="100%"/></div>
      </div>
    </div>

    </div>
   </div>
  </div>
 )
}

export default MarketingMaterial;