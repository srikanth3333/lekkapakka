import React, {useState} from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

function OrderTracking() {

    const [quantity,setQuantity] = useState(1)


    const increaseQty = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQty = () => {
        setQuantity(quantity - 1)
        if(quantity < 1) {
            setQuantity(1)
        }
    }


    return (
        <>
            <Header  textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
                <section className="tracking">
                    <div className="container">
                        <h5 className="mb-3">Details of your order.</h5>
                        <div className="my-2">
                            <p className="light mb-1">Order No: 000000567</p>
                            <p className="light mb-1">Order Place: 24 june 2021</p>
                            <div className="float-right">
                                <a href="" className="text-decoration-underline text-primary">Download Invoice</a>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap my-4 justify-content-between align-items-center">
                            <div>
                                <h1>Arrives Sat June 26</h1>
                            </div>
                            <div>
                                <button className="btn btn-warning">
                                    Track Delivery
                                </button>
                            </div>
                        </div>
                        <h5 className="mb-2">Shipping Address</h5>
                        <div className="row">
                            <div className="col-lg-4">
                                <p className="mb-1"><b>Srikanth</b></p>
                                <p className="light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusamus beatae repellat delectus iste natus cum distinctio odit at ex.</p>
                            </div>
                        </div>
                        <div className="border p-2">
                              <div className="row my-3">
                            <div className="col-lg-12">
                                    <h5 className="mb-4">Product Details</h5>
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <img src="https://i.pinimg.com/originals/1c/4a/04/1c4a04af246a66edebc6b05614e501e0.png" className="cart-img mx-auto d-block" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="text-box">
                                                <p className="cart-title mb-2">Apple</p>
                                                <p className="light"><del className="me-2">$222</del><span><b>$220</b></span></p>
                                                <form action="">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>500 G</option>
                                                        <option value="1">1 KG</option>
                                                        <option value="2">2 KG</option>
                                                        <option value="3">3 KG</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <div className="d-flex justify-content-center align-items-center qty-box my-2">
                                                {quantity === 1 ? <button disabled onClick={() => decreaseQty()} className="btn btn-info btn-sm">-</button> : <button onClick={() => decreaseQty()} className="btn btn-info btn-sm">-</button>}
                                                    <p className="qty-text">{quantity}</p>
                                                <button onClick={() => increaseQty()} className="btn btn-warning btn-sm">+</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <p lassName="cart-title m-0"><b>$200.00</b></p>
                                            <a href="" className="text-danger">Remove</a>
                                            
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <img src="https://i.pinimg.com/originals/1c/4a/04/1c4a04af246a66edebc6b05614e501e0.png" className="cart-img mx-auto d-block" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="text-box">
                                                <p className="cart-title mb-2">Apple</p>
                                                <p className="light"><del className="me-2">$222</del><span><b>$220</b></span></p>
                                                <form action="">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>500 G</option>
                                                        <option value="1">1 KG</option>
                                                        <option value="2">2 KG</option>
                                                        <option value="3">3 KG</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <div className="d-flex justify-content-center align-items-center qty-box my-2">
                                                {quantity === 1 ? <button disabled onClick={() => decreaseQty()} className="btn btn-info btn-sm">-</button> : <button onClick={() => decreaseQty()} className="btn btn-info btn-sm">-</button>}
                                                    <p className="qty-text">{quantity}</p>
                                                <button onClick={() => increaseQty()} className="btn btn-warning btn-sm">+</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <p lassName="cart-title m-0"><b>$200.00</b></p>
                                            <a href="" className="text-danger">Remove</a>
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            <Footer />

        </>
    )
}

export default OrderTracking
