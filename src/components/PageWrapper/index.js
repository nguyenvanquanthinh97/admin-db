import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoutModal from '../LogoutModal';

class PageWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          {/* navigation-bar */}
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
            </li>
          </ul>

          {/* content */}
          <div className="d-flex flex-column" id="content-wrapper">
            {this.props.children}
          </div>
        </div>

        <Link class="scroll-to-top rounded" to="#page-top">
          <i class="fas fa-angle-up"></i>
        </Link>

        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2019</span>
            </div>
          </div>
        </footer>

        <LogoutModal />
      </div>
    );
  }
}

export default PageWrapper;