import React from 'react';
import img1 from '../../images/re-size book-scouter/tool-1.png';
import img2 from '../../images/re-size book-scouter/tools-2.jpg';
import img3 from '../../images/re-size book-scouter/tools-3.jpg';
import img4 from '../../images/re-size book-scouter/tool-4.png';
import Navbar from '../Home/Navbar/Navbar';

const Tools = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <h1 className="text-center">Pro Tools</h1>
                <div className="col-md-3">
                    <div className="toolCard">
                        <img style={{width:'15.8rem'}} src={img1} alt=""/>
                        <h3 style={{padding:'0.5rem'}}>Deals</h3>
                        <p style={{padding:'0.5rem'}}>This tool uses pricing information from our buy and sell vendors to identify potential deals.</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="toolCard">
                    <img style={{width:'15.8rem'}} src={img2} alt=""/>
                        <h3 style={{padding:'0.5rem'}}>Bulk Lookup</h3>
                        <p style={{padding:'0.5rem'}}>Search up to 10,000 ISBNs per day. We pull the information on the fly, so be patient if you have a large list.</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="toolCard">
                    <img style={{width:'15.8rem'}} src={img3} alt=""/>
                        <h3 style={{padding:'0.5rem'}}>Recently Searched High-Value Books</h3>
                        <p style={{padding:'0.5rem'}}>View up to 14 days of BookScouter users search histories. Narrow the results using a minimum and maximum buyback price.</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="toolCard">
                    <img style={{width:'15.9rem'}} src={img4} alt=""/>
                        <h3 style={{padding:'0.5rem'}}>Historic Buyback Price Lookup</h3>
                        <p style={{padding:'0.5rem'}}>Review the buyback price history for a given ISBN. This is very useful for identifying volatility and seasonality in pricing. </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Tools;