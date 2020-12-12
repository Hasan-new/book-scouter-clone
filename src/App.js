import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Home from './Components/Home/Home/Home';
import Blog from './Components/Blog/Blog';
import Pro from './Components/Pro/Pro';
import General from './Components/Blog/General/General';
import Vendors from './Components/Blog/Vendors/Vendors';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route path='/blog'>
            <Blog /> 
          </Route>
          <Route path='/general'>
            <General />
          </Route>
          <Route paht='/vendors'>
            <Vendors />
          </Route>
          <Route path='/pro'> 
            <Pro />
          </Route>
        </Switch>
    </Router>
      {/* added my burj-al-arab's appID */}
      <MessengerCustomerChat pageId="107001421277135" appId="655923621786742" />
    </>

  );
}

export default App;
