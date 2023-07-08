import React from 'react'
import './Services.css';
// import "./App.css";

const Services = () => {
    return (
        <div className="container-fluid bg-white p-5 ">
            <div className='container '>
                <div className="row  text-center align-items-center">
                    <div className="col-md-4 ">
                        <div className="card bg-light" >
                            <div className="card-body card-height">

                                <img className="img-fluid w-25" src="./images/delivery-truck.png" alt="delivery-truck" srcSet="" />

                                <p className="card-text">Super Fast And Free Delivery </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row gy-4">
                            <div className="col-12 ">
                                <div className="card bg-light "  >
                                    <div className="card-body">
                                        <img className="img-fluid w-25" src="./images/shield.png" alt="shield" srcSet="" />
                                        <span className="card-text"> Non-Contact Shipping</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card bg-light " >
                                    <div className="card-body">
                                        <img className="img-fluid w-25" src="./images/money-back.png" alt="money-back" srcSet="" />
                                        <span className="card-text"> Money-Back Guarantee</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card bg-light">
                            <div className="card-body card-height">
                                <img className="img-fluid w-25" src="./images/secure-payment.png" alt="secure-payment" />
                                <p className="card-text">Super Secure Payment System</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
