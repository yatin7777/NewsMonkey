import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path ="/"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="general"/> <Redirect to='/'/> </Route> 
          <Route exact path ="/business"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="business"/> <Redirect to='/business'/> </Route> 
          <Route exact path ="/entertainment"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="entertainment"/> <Redirect to='/entertainment'/> </Route> 
          <Route exact path ="/general"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="general"/> <Redirect to='/general'/> </Route> 
          <Route exact path ="/health"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="health"/> <Redirect to='/health'/> </Route> 
          <Route exact path ="/science"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="science"/> <Redirect to='/science'/> </Route> 
          <Route exact path ="/sports"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="sports"/> <Redirect to='/sports'/> </Route> 
          <Route exact path ="/technology"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="technology"/> <Redirect to='/technology'/> </Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;