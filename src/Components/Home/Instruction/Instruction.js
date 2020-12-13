import React from 'react';
import './Instruction.css'
const Instruction = () => {
    return (
        <section className='instructions'>
            <div className="search-compare-ship">
                <div className="container">
                    <div className="row search-compare-ship">
                        <div className="col-4 d-flex align-items-center">

                            <div>
                                <h1 style={{ color: "#E95B2E", fontSize: '70px', marginBottom: '20px' }}>1</h1>
                            </div>

                            <div>
                                <h2>SEARCH</h2>
                                <p className='mt-0'>30+ buyback vendors</p>
                            </div>
                        </div>
                        {/* <hr style={{position: 'vertical'}}/> */}
                        <div className="col-4 d-flex align-items-center">

                            <div>
                                <h1 style={{ color: "#E95B2E", fontSize: '70px', marginBottom: '20px' }}>2</h1>
                            </div>

                            <div>
                                <h2>COMPARE</h2>
                                <p className='mt-0'>prices and seller feedback</p>
                            </div>
                        </div>


                        <div className="col-4 d-flex align-items-center">

                            <div>
                                <h1 style={{ color: "#E95B2E", fontSize: '70px', marginBottom: '20px' }}>3</h1>
                            </div>

                            <div>
                                <h2>SHIP</h2>
                                <p className='mt-0'>for FREE and get paid</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='whyBookScouter' style={{ background: '#696969', padding: '20px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1 className='text-info'>Why use BookScouter?</h1>
                        </div>
                        <div className="col-6">
                            <p className='text-light'>BookScouter helps you sell textbooks and used books for the most money by comparing offers from over 30 book buyback vendors with a single search.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instruction;