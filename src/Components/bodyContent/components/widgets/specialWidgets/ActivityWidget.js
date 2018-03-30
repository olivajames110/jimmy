import React, { Component } from 'react';

import './ActivityWidget.css';

const ActivityWidget = () => {
 return  (
  <div className="activity-widget-container"> 
   <div className="widget-title-heading">
    <i className="fa fa-users" />
    <span className="widget-title">Recent Activity</span>
   </div>
   
   <div className="activity-widget-body-content">
    <div className="activity-widget-body-square activity-square-reviews">
      <i class="fa fa-star" /> 
      <div className="">Reviews</div>
    </div>
    <div className="activity-widget-body-square activity-square-email">
      <i className="fa fa-envelope" /> 
      <div className="">Email Contacts</div>
    </div>
    <div className="activity-widget-body-square activity-square-social">
      <i class="fa fa-share-alt" /> 
      <div className="">Social</div>
    </div>
    <div className="activity-widget-body-square activity-square-listing">
      <i className="fa fa-eye" /> 
      <div className="">Listing</div>
    </div>

     
   </div>
   
   <div className="activity-widget-bar-content">
    <div className="activity-widget-bar">
      <div>Recent Activity</div>
    </div>
   </div>

   <div className="widget-extend-conent">
    <div className="widget-extend-arrow">
     <i className="fa fa-angle-down" />
    </div>
   </div>



  </div>

 );
}

export default ActivityWidget;