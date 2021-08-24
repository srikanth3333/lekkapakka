import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import StepBar from '../includes/StepBar';

function ShippingAddress() {
    return (
        <>
            <Header  textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
            <StepBar activeStatus={'active'} />
            <section className="address pt-0">
                <div className="mar-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <h5>Select a delivery address</h5>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card address-active">
                                            <div className="card-body">
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div>
                                                        <h6>Srikanth</h6>
                                                    </div>
                                                    <div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" checked value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                       
                                                    </label>
                                                    </div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus quas laborum tempora in, eius a officia quaerat corporis aliquam.</p>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <button className="btn btn-default">Edit</button>
                                                    <button className="btn btn-default">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div>
                                                        <h6>Srikanth</h6>
                                                    </div>
                                                    <div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                       
                                                    </label>
                                                    </div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus quas laborum tempora in, eius a officia quaerat corporis aliquam.</p>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <button className="btn btn-default">Edit</button>
                                                    <button className="btn btn-default">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card  h-100">
                                            <div className="card-body">
                                               <div className="text-center h-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class=" mt-4 bi bi-plus-lg" viewBox="0 0 16 16">
                                                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                                                    </svg>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-4 px-5">
                            <div className="d-flex justify-content-between px-5">
                                <button className="btn btn-default">Back</button>
                                <button className="btn btn-warning">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ShippingAddress
