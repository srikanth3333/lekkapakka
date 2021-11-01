import React from 'react';
import {Link} from 'react-router-dom'

function ProductItem({productsList}) {



    return (
        <>
          <div className="scrolling-wrapper row flex-row flex-nowrap custom-width">
            {
                productsList ?
                productsList.map((product, i) => (
                        <div className="col-lg-3">
                            <Link to={`/productDetail/${product.key}`}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-end">
                                        <div className="offer-box">
                                            10% OFF
                                        </div>
                                    </div>
                                    <img src={`https://toolx321.herokuapp.com/${product && product.products.image[0] ? product.products.image[0].filename : null}`} className="img-item" alt="" />
                                    <div className="text-box-product my-2 text-center">
                                        <h6 className="product-title text-center m-0">
                                            {product.products.name}
                                        </h6>
                                        <span className="text-danger small"><b>Hurry</b> 5 kg left</span>
                                        <h5 className="product-price text-center">
                                            <b>${product.products.price}</b>
                                        </h5>
                                    </div>
                                    <div className="qty-box my-2">
                                        <div className="d-flex justify-content-around align-items-center">
                                            <form action="">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>1</option>
                                                    <option value="1">2</option>
                                                    <option value="2">3</option>
                                                    <option value="3">4</option>
                                                </select>
                                            </form>
                                            <div>
                                                <button className="btn btn-dark">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                ))
                :
                <p>No products available</p>
            }             
          </div>  
        </>
    )
}

export default ProductItem
