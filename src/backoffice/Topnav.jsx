import React from 'react'
import { Link } from "react-router-dom"
const Topnav = () => {

    return (
        <>
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <ul className="navbar-nav ml-auto">


                    {/* Nav Item - Messages */}

                    <div className="topbar-divider d-none d-sm-block" />
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                        <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                            <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                        </Link>
                        {/* Dropdown - User Information */}

                    </li>
                </ul>
            </nav>
            {/* End of Topbar */}
        </>
    )
}
export default Topnav;