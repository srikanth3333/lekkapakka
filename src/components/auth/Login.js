import React from 'react';
import Header from '../includes/Header';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <>
        <Header />
        <section className="auth__bg">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 auth__bg__img">
                        <div className="text__box px-4">
                            <h1>Welcome back</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda velit earum doloremque corporis sequi nam!</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h2 className="text-center">
                            Login Your Account
                        </h2>
                        <form className="form-box">
                            <div className="form-group">
                                <label htmlFor="">Email or mobile number</label>    
                                <input type="text" className="form-control" placeholder="Enter Email or mobile number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label> 
                                <input type="text" className="form-control" placeholder="Enter Password" />
                            </div>
                            <div className="form-group d-flex justify-content-between align-items-center">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label m-0" for="flexCheckDefault">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/reset">Forget password ?</Link>
                                </div>
                            </div>
                            <div className="btn-box">
                                <div className="btn btn-warning w-100">Continue</div>
                            </div>
                        </form>

                        <div className="pad__box text-center">
                            <p className="light hr__line">or Continue with</p>
                        </div>
                        <div className="text-center">
                            <Link to="/register" >Don't have an account ? <b className="text-dark">Register</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
}

export default Login
