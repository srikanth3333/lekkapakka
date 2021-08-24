import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import StepBar from '../includes/StepBar';

function Payment() {
    return (
        <>
            <Header  textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
            <StepBar activeStatus="active" activeStatusPayment="active" />
            <section className="payment section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h6>Payment Details</h6>
                            <div className="form-group my-0">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment-select" id="credit"  />
                                    <label class="form-check-label" for="credit">
                                        Credit Card
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment-select" id="debit" />
                                    <label class="form-check-label" for="debit">
                                        Debit Card
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment-select" id="upi" />
                                    <label class="form-check-label" for="upi">
                                        UPI
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment-select" id="banking" />
                                    <label class="form-check-label" for="banking">
                                        Net Banking
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment-select" id="cash" />
                                    <label class="form-check-label" for="cash">
                                        Cash On Delivery
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h6>Credit Card</h6>
                            <div className="form-group">
                                <label htmlFor="">Email or mobile number</label>    
                                <input type="text" className="form-control" placeholder="Enter Email or mobile number" />
                            </div>
                            <form action="" className="form-group">
                                <div className="form-group">
                                    <label htmlFor="">Name on Card</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="row p-0">
                                    <div className="col-lg-2">
                                        <div className="form-group">
                                            <label htmlFor="">Expiration</label>
                                            <input type="text" className="form-control" />
                                        </div>  
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="form-group">
                                            <label htmlFor="">	&nbsp;</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <label htmlFor="">CVC</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group my-4">
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <button className="btn btn-default">Not Now</button>
                                        <button className="btn btn-warning">Continue Payment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Payment
