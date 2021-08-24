import React, {useState} from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import ProductItem from '../includes/ProductItem';

function Cart() {

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
                <section className="cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h5 className="mb-4">SHOPPING CART</h5>
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
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="mb-4">Apply Coupon</h5>
                                        <div className="box mb-2 d-flex justify-content-between align-items-center  border p-1">
                                            <input type="text" className="form-control no-borders" placeholder=""/>
                                            <button className="btn btn-default p-1">Apply</button>
                                        </div>
                                        <p className="light">NOTE: Please enter the right coupin code to get a dreamy discount.</p>
                                        <h5 className="mb-3">Available Coupons</h5>
                                        <div className="box py-1 px-2 mb-4 flex-wrap border d-flex justify-content-between align-items-center">
                                            <img src="https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png" className="small-img" alt="" />
                                            <p className="small text-secondary m-0">WFHFCC33</p>
                                            <button className="btn btn-warning rounded">Apply</button>
                                        </div>
                                        <h5 className="">ORDER SUMMARY</h5>
                                        <hr />
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <div>
                                                <p>SubTotal</p>
                                                <p>Discount</p>
                                                <p className="light small">Delivery Charges</p>
                                            </div>
                                            <div>
                                                <p>$390</p>
                                                <p>$150(10%)</p>
                                                <p>$0.0</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <p><b>TOTAL</b></p>
                                            <p><b>$440</b></p>
                                        </div>
                                        <button className="btn btn-warning w-100 py-2">Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container-fluid mb-5">
                    <h5 className="mb-4"><b>Compare with similar items</b></h5>
                    <ProductItem />
                </div>
            <Footer />  
        </>
    )
}

export default Cart
