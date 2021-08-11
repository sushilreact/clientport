import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Backnav = (props) => {


    return (

        <>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fa fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/backoffice/bioinfo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fa fa-fw fa-cog" />
                        <span>{props.compnets}</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/backoffice/addinfo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fa fa-fw fa-cog" />
                        <span>{props.addinfo}</span>
                    </Link>
                </li>


                <hr className="sidebar-divider" />


            </ul>
            {/* End of Sidebar */}

        </>
    );
}

export default Backnav;