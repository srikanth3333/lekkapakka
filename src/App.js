import React, {useState,useEffect} from 'react';
import './App.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PasswordReset from './components/auth/PasswordReset';
import Home from './components/pages/Home';
import ProductDetail from './components/pages/ProductDetail';
import CustomerReview from './components/pages/CustomerReview';
import Coupon from './components/pages/Coupon';
import ShippingAddress from './components/pages/ShippingAddress';
import Payment from './components/pages/Payment';
import PageNotFound from './components/pages/PageNotFound';
import PaymentSuccess from './components/pages/PaymentSuccess';
import Cart from './components/pages/Cart';
import OrderTracking from './components/pages/OrderTracking';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {


  const [loggedIn,setLoggedIn] = useState(null)

  useEffect(() => {
    let token = localStorage.getItem('token')
    setLoggedIn(token)
  }, [])

  return (
    <>
      <Router>
          <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/reset">
                <PasswordReset />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/productDetail/:id">
                <ProductDetail />
              </Route>
              <Route exact path="/customerReview">
                <CustomerReview />
              </Route>
              <Route exact path="/coupon">
                <Coupon />
              </Route>
              <Route exact path="/shippingAddress">
                <ShippingAddress />
              </Route>
              <Route exact path="/payment">
                <Payment />
              </Route>
              <Route exact path="/paymentSuccess">
                <PaymentSuccess />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/tracking">
                <OrderTracking />
              </Route>
              <Route exact path="*">
                <PageNotFound />
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
