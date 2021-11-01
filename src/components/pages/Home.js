import React, {useState, useEffect} from 'react';
import Header from '../includes/Header';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ProductItem from '../includes/ProductItem';
import Footer from '../includes/Footer';
import banner from '../assets/banner.jpg';
import axios from 'axios';

function Home() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    const getCategories = () => {
        axios.get("https://toolx321.herokuapp.com/categories")
        .then(res => setCategories(res.data))
        .catch(err => console.error(err))
    }


    const getProducts = () => {
        axios.get("https://toolx321.herokuapp.com/productList")
        .then(res => setProducts(res.data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getCategories()
        getProducts()
    }, [])

    return (
        <>
            <Header  textColor="text-white fw-normal" headerBgColor="bg-dark py-2" />
            <section className="banner">
                <AwesomeSlider>
                    <div>
                        <img src={banner} className="slider-img" alt="" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/5644302/pexels-photo-5644302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="slider-img" alt="" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/5644302/pexels-photo-5644302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="slider-img" alt="" />
                    </div>
                </AwesomeSlider>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 border-end filters">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Categories
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body list-category">
                                    {
                                        categories ? 
                                        categories.map((category, i) => (
                                            <ul>
                                                <li onClick={() => setActiveIndex(i)} class={activeIndex == i ? `active` : ''}>{category.name}</li>
                                            </ul>
                                        ))
                                        :
                                        <p>No Categories Found</p>
                                    }
                                    
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    New Arrival
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>Test Item</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Discount Sales
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>Test Item</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                   
                        <div class="col-lg-10">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <img src="https://images.pexels.com/photos/4230662/pexels-photo-4230662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="border-radius img-fluid" />
                                </div>  
                                <div className="col-lg-9">
                                    <div className="d-flex align-items-center">
                                        <h3 className="me-2"><b>Vegetable Planet</b>  </h3>
                                        <span className="light">Seller since 1989</span>
                                    </div>
                                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, rem totam? Voluptate in cumque dolore repellat odio et ipsum, soluta ab dolorum inventore pariatur non ut, architecto numquam nisi eos.</p>
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
                                    <div className="d-flex">
                                        <button className="btn btn-success me-2">Whatsapp</button>
                                        <button className="btn btn-info text-white">Call Us</button>
                                    </div>
                                </div>
                            </div>

                            <div className="ano-slider my-4">
                                <AwesomeSlider>
                                    <div>
                                        <img src="https://previews.123rf.com/images/kchung/kchung1909/kchung190900083/130601427-sunscreen-product-banner-ads-on-orange-square-podium-and-paper-art-background-in-3d-illustration.jpg" className="slider-img" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://images.pexels.com/photos/5644302/pexels-photo-5644302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="slider-img" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://images.pexels.com/photos/5644302/pexels-photo-5644302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="slider-img" alt="" />
                                    </div>
                                </AwesomeSlider>
                            </div>

                            <div className="product-list my-4">
                                <div className="d-flex flex-wrap align-items-baseline justify-content-between">
                                    <div className="navs">
                                        <a href="#">Home <b>/ Fresh Fruits</b></a>
                                    </div>
                                    <div>
                                        <input type="text" className="me-2 search form-control" placeholder="Search for product" />
                                    </div>
                                </div>
                            </div>

                            <div className="product-item-list">
                                <ProductItem productsList={products} />
                                {/* <ProductItem  /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
