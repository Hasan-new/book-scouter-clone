import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/'>
          <Home/>
          </Route>
          <Route path='/blog'>
          <Blog></Blog> 
          </Route>
          
        </Switch>
    </Router>
      {/* added my burj-al-arab's appID */}
      <MessengerCustomerChat pageId="107001421277135" appId="655923621786742" />
    </>

  );
}

export default App;
