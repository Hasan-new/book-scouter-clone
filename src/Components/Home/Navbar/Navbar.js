import React, { useState } from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import Contact from '../../Contact/Contact';
import './Navbar.css'
const Navbar = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a href='/'><img className="img-fluid"  style={{ width: '70%', paddingLeft: '50px', marginLeft: '100px' }} src={logo} alt="" /></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto" style={{ marginLeft: 'auto' }}>
              <li class="nav-item">
                <Link to="/vendor">
                  <a class="nav-link mr-5 active" aria-current="page" href="/vendor">VENDOR</a>
                </Link>
              </li>
              <li class="nav-item">
              <Link to="/tool">
                  <a class="nav-link mr-5" href="/tool">TOOLS</a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="#">TIPS</a>
              </li>
              <li class="nav-item">
                <Link to="/blog">
                  <a class="nav-link mr-5" href="/blog">BLOG</a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="/pro">PRO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" onClick={openModal} style={{cursor: 'pointer'}}>CONTACT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="#">REGISTER</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <Contact modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Navbar;