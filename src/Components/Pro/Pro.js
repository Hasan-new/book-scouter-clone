import React from 'react';
import './Pro.css';
const Pro = () => {
    return (
        <section className='my-5 pro'>
            <div className="container">
                <div className='proItems'>
                    <h1>Become a BookScouter Pro!</h1>
                    <p>BookScouter Pro has several powerful features targeted towards high-volume users:</p>
                </div>
                <div className='proItems'>
                    <h5>Deals</h5>
                    <p>View pricing information from our buy and sell vendors to identify potential deals.</p>
                </div>
                <div className='proItems'>
                    <h5>Bulk Price Lookups</h5>
                    <p>Look up buyback prices for hundreds or thousands of books on one screen.Some limits apply</p>
                </div>
                <div className='proItems'>
                    <h5>Historical Buyback Price Lookup</h5>
                    <p>Review the buyback price history for a given ISBN. Identify seasonal pricing and trends.</p>
                </div>
                <div className='proItems'>
                    <h4>BOOKSCOUTER PRO IS CURRENTLY AVAILABLE FOR A MONTHLY FEE OF $29.99. YOUR FIRST 30 DAYS ARE FREE SO YOU CAN TRY IT WITH NO OBLIGATION.</h4>
                </div>
                <button className='btn btn-danger px-4'><h5 className='text-light mt-2'>SIGN UP OR LOG IN TO UPGRADE TO PRO</h5></button>
            </div>
        </section>
    );
};

export default Pro;