import React from 'react';
import logo from '../../../image/logo.png';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <img className= "img-fluid"  style={{width: '20%', paddingLeft:'7%'}} src={logo} alt=""/>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" style={{marginLeft:'auto'}}>
            <li class="nav-item">
              <a class="nav-link mr-5 active" aria-current="page" href="#">VENDOR</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">TOOLS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">TIPS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">BLOG</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">PRO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">REGISTER</a>
            </li>
            
            
          </ul>
          
        </div>
      </div>
    </nav>
    );
};

export default Navbar;