import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = (props) => {


    return (

        <>

            <header className="header" id="navbar-collapse-toggle">

                <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <li className="icon-box ">
                        <i className="fa fa-home"></i>
                        <Link className='home' to="/home">
                            <h2>{props.home}</h2>
                        </Link>
                    </li>
                    <li className="icon-box">
                        <i className="fa fa-user"></i>
                        <Link className='about' to="/about">
                            <h2>{props.about}</h2>
                        </Link>
                    </li>
                    <li className="icon-box">
                        <i className="fa fa-briefcase"></i>
                        <Link className='port' to="/port">
                            <h2>{props.port}</h2>
                        </Link>
                    </li>
                    <li className="icon-box">
                        <i className="fa fa-envelope-open"></i>
                        <Link className='contact' to="/contact">
                            <h2>{props.contact}</h2>
                        </Link>
                    </li>
                    <li className="icon-box">
                        <i className="fa fa-comments"></i>
                        <Link className='blog' to="/blog">
                            <h2>{props.blog}</h2>
                        </Link>
                    </li>
                    <li className="icon-box">
                        <i className="fa fa-comments"></i>
                        <Link className='blog' to="/logout">
                            <h2>Logout</h2>
                        </Link>
                    </li>
                </ul>

                <nav role="navigation" className="d-block d-lg-none">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="list-unstyled" id="menu">
                            <li><Link to="/"><i className="fa fa-home"></i><span>{props.home}</span></Link></li>
                            <li><Link to="/about"><i className="fa fa-user"></i><span>{props.about}</span></Link></li>
                            <li><Link to="/port"><i className="fa fa-folder-open"></i><span>{props.port}</span></Link></li>
                            <li><Link to="/contact"><i className="fa fa-envelope-open"></i><span>{props.contact}</span></Link></li>
                            <li><Link to="/blog"><i className="fa fa-comments"></i><span>{props.blog}</span></Link></li>
                        </ul>
                    </div>
                </nav>

            </header>

        </>
    );
}

export default Navbar;