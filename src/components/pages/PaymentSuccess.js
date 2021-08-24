import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import StepBar from '../includes/StepBar';
import ProductItem from '../includes/ProductItem';

function PaymentSuccess() {
    return (
        <>
            <Header  textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
            <StepBar activeStatus="active" successPayment="active" activeStatusPayment="active" />
            <section className="address success-payment">
                <div className="container">
                    <div className="text-center lotie-container">
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_pbuujemj.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px',textAlign: 'center',position: 'absolute',top:'14%',left:'50%',transform: 'translate(-50%)'}}  loop autoplay></lottie-player>
                        <div className="index-top">
                            <h1 className="mb-2">Thanks for your Order</h1>
                            <p className="text-light-color mb-2">Order Number: 123456789</p>
                            <a href="">Download Receipt</a>
                        </div>
                        <div className="d-flex my-4 justify-content-center">
                            <button className="btn btn-warning me-4">Track Delivery</button>
                            <button className="btn btn-default">Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-5">
                <h5 className="mb-4"><b>Compare with similar items</b></h5>
                <ProductItem />
            </div>
            <Footer />
        </>
    )
}

export default PaymentSuccess
