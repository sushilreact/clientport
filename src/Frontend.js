import React, { useEffect, useState } from 'react'
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import About from './componets/About';
import Port from './componets/Portfolio';
import Contact from './componets/Contact';
import Blog from './componets/Blog';
import Logout from './componets/Logout';
import Pagenotfound from './componets/Pagenotfound';
import Bioinfo from './backoffice/Bioinfo'
import Login from './backoffice/Login'
import Signup from './backoffice/Signup'
import Addinfo from './backoffice/Addinfo'
import Updateinfo from './backoffice/Updateinfo'
import Addskils from './backoffice/Addskils'
import Experience from './backoffice/Experience'
import Portfolio from './backoffice/Portfolio'
import '../src/assets/css/preloader.min.css'
import '../src/assets/css/circle.css'
import '../src/assets/css/fm.revealator.jquery.min.css'
import '../src/assets/css/style.css'
import '../src/assets/css/skins/yellow.css';

import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom"
const Frontend = () => {



    return (
        <>
            <BrowserRouter>
                <Navbar
                    home="home"
                    about="about"
                    port="Portfolio"
                    contact="contact"
                    blog="blog"
                />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/port" component={Port} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/backoffice/bioinfo" component={Bioinfo} />
                    <Route exact path="/backoffice/login" component={Login} />
                    <Route exact path="/backoffice/signup" component={Signup} />
                    <Route exact path="/backoffice/addinfo" component={Addinfo} />
                    <Route exact path="/backoffice/updateinfo" component={Updateinfo} />
                    <Route exact path="/backoffice/addskils" component={Addskils} />
                    <Route exact path="/backoffice/experience" component={Experience} />
                    <Route exact path="/backoffice/portfolio" component={Portfolio} />

                    <Redirect to="/" component={Pagenotfound} />

                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Frontend;
