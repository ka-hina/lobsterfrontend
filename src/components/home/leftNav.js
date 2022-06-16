import React from "react";

const LeftNav = () => {
  return (
    <div className="vertical-nav" id="sidebar">
      <div className="py-5 px-3 mb-4 bg-light">
        <div className="media d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt="..."
            width="65"
            className="mr-3 rounded-circle shadow-sm"
          />
          <div className="media-body">
            <h4 className="m-0">Lobster</h4>
          </div>
        </div>
      </div>

      <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Main
      </p>

      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-th-large mr-3 text-secondary fa-fw textNav"></i>
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-address-card mr-3 text-secondary fa-fw textNav"></i>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-cubes mr-3 text-secondary fa-fw textNav"></i>
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-picture-o mr-3 text-secondary fa-fw textNav"></i>
            Gallery
          </a>
        </li>
      </ul>

      <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
        Charts
      </p>

      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-area-chart mr-3 text-secondary fa-fw textNav"></i>
            Area charts
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-bar-chart mr-3 text-secondary fa-fw textNav"></i>
            Bar charts
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-pie-chart mr-3 text-secondary fa-fw textNav"></i>
            Pie charts
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-line-chart mr-3 text-secondary fa-fw textNav"></i>
            Line charts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
