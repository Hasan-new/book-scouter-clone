import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const BuyVendor = (props) => {
    const { title, id, img } = props.vendor;

    const history = useHistory();
    const addHandler = () => {
        history.push(`/buy/${id}`)
    }
    return (
        <div className="col-md-3 col sm-6">
            <div onClick={addHandler} className="cardPart text-center">
                <img src={img} alt="" />
                <p className="icon"><FontAwesomeIcon className="iconStyle" icon={faStar} /><FontAwesomeIcon className="iconStyle" icon={faStar} /><FontAwesomeIcon className="iconStyle" icon={faStar} /><FontAwesomeIcon className="iconStyle" icon={faStar} /><FontAwesomeIcon className="iconStyle" icon={faStar} /></p>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default BuyVendor;