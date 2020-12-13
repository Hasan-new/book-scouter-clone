import React from 'react';
import { useParams } from 'react-router-dom';
import { BuySell } from '../../FakeData/FakeData';

const BuyVendorDetails = () => {
    const { buyId } = useParams();

    const preferred = BuySell.find(item => item.id.toString() === buyId);
    const { img, title, description, shortDescription, siteName, liveSite } = preferred;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="cardStyle text-center">
                        <img src={img} alt="" /><br />
                        <h4><a className="ankor" href={liveSite}>{siteName}</a></h4>
                        <h6>{shortDescription}</h6>
                    </div>
                </div>
                <div className="col-md-8">
                    <h1>{title}</h1>
                    <h6>{description}</h6>
                </div>
            </div>
        </div>
    );
};

export default BuyVendorDetails;