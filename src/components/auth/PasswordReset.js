import React from 'react';
import Header from '../includes/Header';


function PasswordReset() {
    return (
        <>
            <Header textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
            <section className="password__bg">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body py-5">
                                    <h2 className="text-center">Reset Your Password</h2>
                                    <form action="" className="form-box">
                                        <div className="form-group">
                                            <label htmlFor="">New Password</label>    
                                            <input type="text" className="form-control" placeholder="Enter your password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Confirm Password</label>    
                                            <input type="text" className="form-control" placeholder="Enter your password" />
                                        </div>
                                        <div className="btn-box mt-4">
                                            <div className="btn btn-warning w-100 btn__bRadius">Continue</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PasswordReset
