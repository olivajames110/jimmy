import React from 'react';
import PropTypes from 'proptypes';
import Widget from './components/widgets/widget';
import ActivityWidget from './components/widgets/specialWidgets/ActivityWidget';

import './bodyContent.css';
const widgets = [
 {
  type: "Reviews",
  mainStat: 36,
  graph: 'asdasd',
  subStats: [
   {
    label: 'industry',
    value: .8,
   },
   {
    label: 'Total',
    value: 236,
   },
   {
    label: 'Streak',
    value: 8,
   }
  ]
 }
];

const BodyContent = () => {
 // const subStats = widgets.map(widget => {
 //  return widget.subStats;
 // })
 return (
  <div>
   <div className="body">
    <div className="widgets-holder">
      
      <ActivityWidget />
     <Widget 
      name="Reviews"
      widgetBackgroundColor="#0765F1" 
      mainStatNum="4.7"
      mainStatDesc="Average Score" 
      barColor="#40B8D3"  
      graph="https://digitalmarketing.blob.core.windows.net/10030/images/items/image481358.png" 
      subStatOneNum="+ 0.8"
      subStatOneDesc="Industry"
      subStatTwoNum="236"
      subStatTwoDesc="Total"
      subStatThreeNum="8"
      subStatThreeDesc="Streak"
      />
      <Widget 
      name="Email Marketing"
      widgetBackgroundColor="#19774B" 
      mainStatNum="796"
      mainStatDesc="Total Contacts" 
      barColor="#22BA54"  
      graph="https://digitalmarketing.blob.core.windows.net/10030/images/items/image481359.png" 
      subStatOneNum="308"
      subStatOneDesc="Opens"
      subStatTwoNum="211"
      subStatTwoDesc="Clicks"
      subStatThreeNum="6"
      subStatThreeDesc="Campaigns"
      />
      
      <Widget 
      name="Social Media"
      widgetBackgroundColor="#D62F2F" 
      mainStatNum="866"
      mainStatDesc="Total Audience" 
      barColor="#F5A666"  
      graph="https://digitalmarketing.blob.core.windows.net/10030/images/items/image481361.png" 
      subStatOneNum="236"
      subStatOneDesc="Engagement"
      subStatTwoNum="866"
      subStatTwoDesc="Audience"
      subStatThreeNum="9"
      subStatThreeDesc="Posts"
      /> 

      <Widget 
      name="Listing Score"
      widgetBackgroundColor="#971E40" 
      mainStatNum="12"
      mainStatDesc="Miles Ran" 
      barColor="#B8305F"  
      graph="https://digitalmarketing.blob.core.windows.net/10030/images/items/image481360.png" 
      subStatOneNum="26"
      subStatOneDesc="Accurate"
      subStatTwoNum="4"
      subStatTwoDesc="Errors"
      subStatThreeNum="1"
      subStatThreeDesc="Not Found"
      /> 

      <Widget 
      name="Recipes"
      widgetBackgroundColor="Teal" 
      mainStatNum="120"
      mainStatDesc="Recipes Made" 
      barColor="orange"  
      graph="https://digitalmarketing.blob.core.windows.net/10030/images/items/image481361.png" 
      subStatOneNum="60"
      subStatOneDesc="Breakfast"
      subStatTwoNum="20"
      subStatTwoDesc="Baked Goods"
      subStatThreeNum="40"
      subStatThreeDesc="Drinks"
      /> 


    </div>
   </div>
  </div>
 );
}

export default BodyContent;