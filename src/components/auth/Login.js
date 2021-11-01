import React, {useState} from 'react';
import Header from '../includes/Header';
import {Link} from 'react-router-dom';
import axios from 'axios'

function Login() {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(email)
        return re.test(email);
    }

    const handleLogin = (e) => {
        e.preventDefault();  
        let data = {}
        if(validateEmail(username) == true) {
            data = {
                email : username,
                password: password
            }
        }else {
            alert("Enter a valid Email")
        }

        axios.post("https://toolx321.herokuapp.com/login", data)
        .then(res => {
            if(res.data.message == true) {
                localStorage.setItem('token', username)
                window.location.href = "/"
            }else {
                alert(res.data.info)
            }
        })
        .catch(err => { 
            console.log(err)
        })
    }


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
                        <form className="form-box" onSubmit={handleLogin}> 
                            <div className="form-group">
                                <label htmlFor="">Email or mobile number</label>    
                                <input type="text" required onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter Email or mobile number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label> 
                                <input type="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
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
                                <button type="submit" className="btn btn-warning w-100">Continue</button>
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
