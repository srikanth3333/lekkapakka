import React,{useState} from 'react';
import Header from '../includes/Header';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [value, setValue] = useState('91')
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    const handleRegister = (e) => {
        e.preventDefault();
        const data = {
            mobile: value,
            email: email,
            firstName:name,
            lastName: name,
            password: password
        }
        axios.post("https://toolx321.herokuapp.com/customerCreation", data)
        .then(res => {
            if(res.data.message == true) {
                localStorage.setItem('token', value)
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
                            Create a account
                        </h2>
                        <form className="form-box" onSubmit={handleRegister}>
                            <div className="form-group">
                                <label htmlFor="">Your name</label>    
                                <input type="text" required onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mobile number</label> 
                                <PhoneInput
                                    style={{width:'100%'}}
                                    placeholder="Enter phone number"
                                    value={value}
                                    required
                                    onChange={setValue}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label> 
                                <input type="text" required onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <div class="form-check">
                                    <input required class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label m-0" for="flexCheckDefault">
                                        I Don't want to receive any promotional or announcements on my email
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label> 
                                <input required type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
                            </div>
                            <div className="form-group">
                                <label>We will send you a text to verify your phone <br /> Message and Data rates may apply</label>
                            </div>
                            <div className="btn-box">
                                <button type="submit" className="btn btn-warning w-100">Continue</button>
                            </div>
                        </form>
                        <div className="text-center mt-2">
                            <Link to="/login" >Already a member ? <b className="text-dark">Login</b></Link> <br /> <br />
                            <label htmlFor="">By continuing sign up you are accepting <span className="text-primary"><b>LekkaPakka</b> privacy policy</span> and <span className="text-primary">terms of services</span></label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
      </>
    )
}

export default Register;
