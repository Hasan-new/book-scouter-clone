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
import VendorList from './Components/Vendor/VendorList/VendorList';
import NormalVendorDetails from './Components/Vendor/VendorDetails/NormalVendorDetails';
import BuyVendorDetails from './Components/Vendor/VendorDetails/BuyVendorDetails';
import PreferredVendorDetails from './Components/Vendor/VendorDetails/PreferredVendorDetails';
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
          <Route path='/vendor'>
            <VendorList></VendorList> 
          </Route>
          <Route path='/preferred/:preferredId'>
            <PreferredVendorDetails></PreferredVendorDetails> 
          </Route>
          <Route path='/normal/:normalId'>
            <NormalVendorDetails></NormalVendorDetails>
          </Route>
          <Route path='/buy/:buyId'>
             <BuyVendorDetails></BuyVendorDetails>
          </Route>
          
          <Route path='/general'>
            <General />
          </Route>
          <Route path='/vendors'>
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
