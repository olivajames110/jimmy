import React from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ logo }) => {
 return (
  <div className="header">
   <div className="app-switch">
    <i className="fa fa-bars" />
    <span>Ordereze > Social Hub</span>
   </div>
  
    <img className="header-logo" src="https://www.ordereze.com/Content/social-hub-icons/apps/ordereze.svg" />
 
   <div className="prof-manager">
    <div className="return-to-website">
    <i class="fa fa-mail-reply-all" />
    <span>Return To website</span>
    </div>
    <div className="profile">
    <i class="	fa fa-user-circle" />
    </div>
   </div>
  </div>
 );
}

// Used to define the prop type
const { string } = PropTypes;

Header.propTypes = {
 /**
  * The url for the logo
  */
 logo: string
};

Header.defaultProps = {
 logo: ''
};

export default Header;