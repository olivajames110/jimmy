import React from 'react';
import PropTypes from 'proptypes';

import './navBox.css';

const NavBox = ({ icon, text }) => (
 <div className="nav-box">
  <i className={`fa fa-${icon}`} />
  <p className="nav-icon-text">{text}</p>
 </div>
);

const { string } = PropTypes;

NavBox.propTypes = {
 icon: string,
 text: string
};

NavBox.defaultProps = {
 icon: '',
 text: ''
};

export default NavBox;


// const NavBox = (props) => {
//  const { icon, text } = props;
//  return (
//   <div>
//    {icon}
//    {text}
//   </div>
//  );
// };

// const NavBox = ({ icon, text }) => {
//  return (
//   <div>
  
//   </div>
//  );
// };

// const NavBox = ({ icon, text }) => (
//  <div>
 
//  </div>
// );