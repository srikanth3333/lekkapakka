import React from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import ProductItem from '../includes/ProductItem';

function Coupon() {
    return (
        <>
          <Header  textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
            <section className="coupon">
                <div className="container">
                    <h5>Redeem Coupon</h5>
                    <div className="row coupon-row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body ">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <img src="https://image.shutterstock.com/image-vector/10-off-sale-discount-banner-260nw-759863149.jpg" className="img-fluid" alt="" />
                                        </div>  
                                        <div className="col-lg-9">
                                            <p className="mb-1"><b>10% off on your next order</b></p>
                                            <p className="text-light-color">Daily login bones Rs.50 max discount</p>
                                            <div className="border-dashed w-50 p-2 text-center">
                                                <p className="mb-0"><b>100OFFORDER</b>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard ms-3" viewBox="0 0 16 16">
                                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body ">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <img src="https://image.shutterstock.com/image-vector/10-off-sale-discount-banner-260nw-759863149.jpg" className="img-fluid" alt="" />
                                        </div>  
                                        <div className="col-lg-9">
                                            <p className="mb-1"><b>10% off on your next order</b></p>
                                            <p className="text-light-color">Daily login bones Rs.50 max discount</p>
                                            <div className="border-dashed w-50 p-2 text-center">
                                                <p className="mb-0"><b>100OFFORDER</b>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard ms-3" viewBox="0 0 16 16">
                                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body ">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <img src="https://image.shutterstock.com/image-vector/10-off-sale-discount-banner-260nw-759863149.jpg" className="img-fluid" alt="" />
                                        </div>  
                                        <div className="col-lg-9">
                                            <p className="mb-1"><b>10% off on your next order</b></p>
                                            <p className="text-light-color">Daily login bones Rs.50 max discount</p>
                                            <div className="border-dashed w-50 p-2 text-center">
                                                <p className="mb-0"><b>100OFFORDER</b>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard ms-3" viewBox="0 0 16 16">
                                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body ">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <img src="https://image.shutterstock.com/image-vector/10-off-sale-discount-banner-260nw-759863149.jpg" className="img-fluid" alt="" />
                                        </div>  
                                        <div className="col-lg-9">
                                            <p className="mb-1"><b>10% off on your next order</b></p>
                                            <p className="text-light-color">Daily login bones Rs.50 max discount</p>
                                            <div className="border-dashed w-50 p-2 text-center">
                                                <p className="mb-0"><b>100OFFORDER</b>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard ms-3" viewBox="0 0 16 16">
                                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5>Compare with similar items</h5>
                    <div className="product-item-list pt-3">
                        <ProductItem />
                    </div>
                </div>
            </section>
          <Footer />  
        </>
    )
}

export default Coupon
