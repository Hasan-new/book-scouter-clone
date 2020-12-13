import React from 'react';
import './VendorList.css'
import { PreferredSell, NormalSell, BuySell } from '../../FakeData/FakeData';
import PreferredVendor from './PreferredVendor';
import NormalVendor from './NormalVendor';
import BuyVendor from './BuyVendor'
import Navbar from '../../Home/Navbar/Navbar';

const VendorList = () => {
    return (
        <>

        <div className="container">
            <h1 className="text-center">Vendors List</h1>
            <div className="row text-center">
                <h3>PREFERRED SELL VENDORS</h3>
                {
                    PreferredSell.map(vendor => <PreferredVendor vendor={vendor} key={vendor.id}></PreferredVendor>)
                }
            </div>
            <div className="row text-center">
                <h3 className="mt-5">NORMAL SELL VENDORS</h3>
                {
                    NormalSell.map(vendor => <NormalVendor vendor={vendor} key={vendor.id}></NormalVendor>)
                }
            </div>
            <div className="row text-center">
                <h3 className="mt-5">BUY VENDORS</h3>
                {
                    BuySell.map(vendor => <BuyVendor vendor={vendor} key={vendor.id}></BuyVendor>)
                }
            </div>
        </div>
        </>
    );
};

export default VendorList;