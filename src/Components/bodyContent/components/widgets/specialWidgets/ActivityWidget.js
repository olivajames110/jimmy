import React, { Component } from 'react';

import './ActivityWidget.css';

const ActivityWidget = () => {
 return  (
  <div className="activity-widget-container"> 
   <div className="widget-title-heading">
    <i className="fa fa-users" />
    <span className="widget-title">Recent Activity</span>
   </div>
   
   <div className="widget-body-content">
    <div className="widget-body-number">
     <span className="widget-body-number-big-number"></span>
     <p className="widget-body-number-big-number-text"></p>
    </div>
    <div className="widget-body-graph">
     <img src="" width="100%" />
   </div>
   </div>
   
   <div className="widget-bar-content">
    <div className="widget-bar">
     <div className="widget-bar1">
      <span className="widget-bar-label"></span>
      <span className="widget-bar-value"></span>
     </div>
     <div className="widget-bar1">
      <span className="widget-bar-label"></span>
      <span className="widget-bar-value"></span>
     </div>
     <div className="widget-bar1">
     <span className="widget-bar-label"></span>
     <span className="widget-bar-value"></span>
    </div>
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