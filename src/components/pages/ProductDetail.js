import React, {useState, useEffect} from 'react';
import Gallery from '../includes/Gallery';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import ProductItem from '../includes/ProductItem';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {


    const [product, setProduct] = useState(undefined)

    let {id} = useParams()
    
    const _productDetail = () => {
        axios.get(`https://toolx321.herokuapp.com/productDetail?id=${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }


    useEffect(() => {
        _productDetail()
    }, [])

    return (
        <>
            <Header  textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
            <section className="detail">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-lg-5">
                            <Gallery data={product ? product.image : null} />
                        </div>
                        <div className="col-lg-7">
                        <div className="d-flex flex-wrap justify-content-between">
                            <div>
                                <h2 className="product-detail-title">
                                    {product ? product.name : null}
                                </h2>
                                <span className="text-light">Veg</span>
                                <h5 className="product-detail-price">
                                    <span className="text-light small"><del>$222.22</del></span>
                                    <b>${product ? product.price : null}</b>
                                    <span className="text-light text-danger small ps-2">You Save 20%</span>
                                    <span className="text-light small">Inclusive of all taxes</span>
                                </h5>
                            </div>
                            <div className="stars py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg> 
                                <span>(300 reviews)</span>
                                <br />
                                <button className="mt-3 btn btn-success">Whatsapp</button>
                            </div>
                            
                        </div>
                            <p className="my-3">Shipping calculated at checkout.</p>
                            <button className="btn btn-dark my-3">Add to cart</button>
                            <h6 className="my-3"><b>About the Product</b></h6>
                            <p>{product ? product.description : null}</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <h6><b>Product Details</b></h6>
                        <p className="text-light-color">{product ? product.description : null}</p>
                    </div>
                    <div className="my-4">
                        <h6><b>Product Specifications</b></h6>
                        <p className="text-light-color">{product ? product.description : null}</p>
                    </div>
                    <div>
                        <h5><b>Compare with similar products</b></h5>
                        <div className="pt-3 product-item-list">
                            <ProductItem/>
                        </div>
                    </div>
                    <div>
                        <h5 style={{fontSize: '2em'}}>Rate Us</h5>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3 className="rating-text"><b>4.44</b></h3>
                                    <div className="stars py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> 
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="progress" style={{height: '30px'}}>
                                        <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress" style={{height: '30px'}}>
                                        <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress" style={{height: '30px'}}>
                                        <div class="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress" style={{height: '30px'}}>
                                        <div class="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress" style={{height: '30px'}}>
                                        <div class="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <h4><b>Add a written review</b></h4>
                                    <p className="text-light-color">You could mention sturdiness comfort and value for</p>
                                    <textarea name="" className="form-control" id="" style={{height: '100px'}} cols="20" rows="10"></textarea>
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

export default ProductDetail
