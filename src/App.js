import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom"
import './App.css';

import Frontend from './Frontend'
import Backmain from './backoffice/Backmain'


const App = () => {

  return (
    <>
      <BrowserRouter>

        <Switch>
          <Route path="/"><Frontend /></Route>
          <Route path="/backoffice"><Backmain /></Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
