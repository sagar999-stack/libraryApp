import React from 'react'
import {Link} from "react-router-dom"

export default function Sidebar() {
    return (
   <aside className="main-sidebar sidebar-dark-primary elevation-4">

  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Book Library</span>
  </a>


<div className="sidebar">
  {/* Sidebar user panel (optional) */}
  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    {/* <div className="image">
      <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
    </div> */}
    <div className="info">
      <a href="#" className="d-block">Dashboard</a>
    </div>
  </div>
  {/* Sidebar Menu */}
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
      <li className="nav-item has-treeview menu-open">
        <a href="#" className="nav-link ">
          <i className="nav-icon fas fa-tachometer-alt" />
          <p>
            Manage Books
            <i className="right fas fa-angle-left" />
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="./AllProducts" className="nav-link">
            
              <p>all Boooks</p>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="./AddProduct" className="nav-link">
            
            <p>Add Boooks</p>
          </Link>
          </li>
        
        </ul>
      </li>
      <li className="nav-item">
        <a href="pages/widgets.html" className="nav-link">
          <i className="nav-icon fas fa-th" />
          <p>
            Widgets
            <span className="right badge badge-danger">New</span>
          </p>
        </a>
      </li>
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-copy" />
          <p>
            Layout Options
            <i className="fas fa-angle-left right" />
            <span className="badge badge-info right">6</span>
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="pages/layout/top-nav.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Top Navigation</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Top Navigation + Sidebar</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/layout/boxed.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Boxed</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/layout/fixed-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Fixed Sidebar</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/layout/fixed-topnav.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Fixed Navbar</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/layout/fixed-footer.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Fixed Footer</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Collapsed Sidebar</p>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-chart-pie" />
          <p>
            Charts
            <i className="right fas fa-angle-left" />
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="pages/charts/chartjs.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>ChartJS</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/charts/flot.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Flot</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/charts/inline.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Inline</p>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-tree" />
          <p>
            UI Elements
            <i className="fas fa-angle-left right" />
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="pages/UI/general.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>General</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/UI/icons.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Icons</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/UI/buttons.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Buttons</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/UI/sliders.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Sliders</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/UI/modals.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Modals &amp; Alerts</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/UI/navbar.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Navbar &amp; Tabs</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/UI/timeline.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Timeline</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/UI/ribbons.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Ribbons</p>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  {/* /.sidebar-menu */}
</div>
  </aside>


    )
}
