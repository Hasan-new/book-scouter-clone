import React, { useState } from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import Contact from '../../Contact/Contact';

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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img className="img-fluid" style={{ width: '20%', paddingLeft: '7%' }} src={logo} alt="" />

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto" style={{ marginLeft: 'auto' }}>
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link mr-5 active" aria-current="page" href="#">VENDOR</a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="#">TOOLS</a>
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