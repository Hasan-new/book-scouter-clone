import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
const Header = () => {
    return (
        <section className='header-main py-5'>
            <div className="container">
                <div>
                    <h1 style={{fontSize:'50px',fontWeight: 'bold'}}>Buy and sell your textbooks</h1>
                    <h2 className='ml-3' style={{fontSize: '50px'}}>for the best price</h2>
                </div>
                <div>
                    <form class="d-flex w-75 search mb-5">
                        <input type="search" className='form-control ' placeholder="Search for ISBN number.." aria-label="Search" />
                        <button class="btn" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Header;