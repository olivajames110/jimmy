import React from 'react';
import PropTypes from 'proptypes';
import './widget.css';


const Widget = ({ name, mainStatNum, mainStatDesc, widgetBackgroundColor, barColor, graph, subStatOneNum, subStatOneDesc, subStatTwoNum, subStatTwoDesc, subStatThreeNum, subStatThreeDesc }) => {
  // const substats = [
  //   {
  //     label: 'industry',
  //     value: .8,
  //   },
  //   {
  //     label: 'Total',
  //     value: 236,
  //   },
  //   {
  //     label: 'Streak',
  //     value: 8,
  //   }
  // ];
  // {
  //   substats.map(stat => {
  //     return <WidgetBar stat={stat.value} label={stat.label} />
  //   })
  // }
 return (
  <div
    className="widget-container"
    style={{ backgroundColor: widgetBackgroundColor }}
  >
   <div className="widget-title-heading">
    <i className="fa fa-star" />
    <span className="widget-title">{name}</span>
   </div>
   
   <div className="widget-body-content">
    <div className="widget-body-number">
     <span className="widget-body-number-big-number">{mainStatNum}</span>
     <p className="widget-body-number-big-number-text">{mainStatDesc}</p>
    </div>
    <div className="widget-body-graph">
     <img src={graph} width="100%" />
   </div>
   </div>
   
   <div className="widget-bar-content">
    <div className="widget-bar"
    style={{ backgroundColor: barColor }}>
     <div className="widget-bar1">
      <span className="widget-bar-label">{subStatOneDesc}</span>
      <span className="widget-bar-value">{subStatOneNum}</span>
     </div>
     <div className="widget-bar1">
      <span className="widget-bar-label">{subStatTwoDesc}</span>
      <span className="widget-bar-value">{subStatTwoNum}</span>
     </div>
     <div className="widget-bar1">
     <span className="widget-bar-label">{subStatThreeDesc}</span>
     <span className="widget-bar-value">{subStatThreeNum}</span>
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

export default Widget;