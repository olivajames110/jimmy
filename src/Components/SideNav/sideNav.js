import React from "react";
import PropTypes from "proptypes";
import NavBox from "./navBox/navBox";
import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="nav">
      
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="nav-box">
            <i class="fa fa-dashboard" />

            <p class="nav-icon-text">Dashboard</p>
          </div>
        </Link>

        <NavBox icon="share-alt" text="Social Media" />

        <Link to="/marketing-material" style={{ textDecoration: 'none' }}>
          <div className="side-nav-not">
            <NavBox icon="line-chart" text="Marketing Material" />
            <div className="notification">1</div>
          </div>
        </Link>

        <Link to="/widget-maker" style={{ textDecoration: 'none' }}>
          <NavBox icon="wpforms" text="Widget Maker" />
        </Link>

        <NavBox icon="cogs" text="Settings" />
      </div>
    </div>
  );
};

export default SideNav;
