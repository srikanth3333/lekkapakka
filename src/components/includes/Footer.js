import React from 'react'

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="">
                    <div className="features-box">
                        <div className="container">
                            <div className="row text-center justify-content-center align-items-center">
                                <div className="col-lg-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#fff" class="bi bi-truck" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                    <div className="features-text">
                                        <h6 className="mt-2"><b>Fast Delivery</b></h6>
                                        <p className="text-white mt-2">Cash on Delivery & Online Payment</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#fff" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                        <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    <div className="features-text">
                                        <h6 className="mt-2"><b>Payment Options</b></h6>
                                        <p className="text-white mt-2">Cash on Delivery & Online Payment</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#fff" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                    </svg>
                                    <div className="features-text">
                                        <h6 className="mt-2"><b>Coupon's</b></h6>
                                        <p className="text-white mt-2">Cash on Delivery & Online Payment</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#fff" class="bi bi-telephone-forward" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    <div className="features-text">
                                        <h6 className="mt-2"><b>Customer Support</b></h6>
                                        <p className="text-white mt-2">Cash on Delivery & Online Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="container main-footer">
                        <div className="row">
                            <div className="col-lg-3">
                                <h4>Get to Know Us</h4>
                                <p><a href="" className="footer-link">About us</a></p>
                                <p><a href="" className="footer-link">Privacy Policy</a></p>
                                <p><a href="" className="footer-link">Terms ans Conditions</a></p>
                            </div>
                            <div className="col-lg-3">
                                <h4>Let Us Help You</h4>
                                <p><a href="" className="footer-link">Your Account</a></p>
                                <p><a href="" className="footer-link">Help</a></p>
                                <p><a href="" className="footer-link">FAQ's</a></p>
                                <p><a href="" className="footer-link"></a></p>
                            </div>
                            <div className="col-lg-3">
                                <h4>Store Details</h4>
                                <p><a href="" className="footer-link">+919063443220</a></p>
                                <p><a href="" className="footer-link">+918555850992</a></p>
                                <p><a href="" className="footer-link">support@lekkapakka.xom</a></p>
                            </div>
                            <div className="col-lg-3">
                                <h4>Get Social With Us</h4>
                                <p><a href="" className="footer-link">Instagram</a></p>
                                <p><a href="" className="footer-link">Facebook</a></p>
                                <p><a href="" className="footer-link">Twitter</a></p>
                                <p><a href="" className="footer-link">Youtube</a></p>
                            </div>
                        </div>
                        <hr />
                        <div className="pt-2 text-center">
                            <p class="mb-0">copyright &copy; 2021-2024 Lekkapakka Pvt Ltd</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
