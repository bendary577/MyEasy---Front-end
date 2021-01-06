import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import SignUpAs from "./Screens/SignUpAs";
import CustomerAccount from './Screens/CustomerAccount';
import EditProfile from "./Screens/EditProfile";
import MakeComplaint from './Screens/MakeComplaint';
import BuyItem from './Screens/BuyItem';
import MyOrders from './Screens/MyOrders';
import MyCart from './Screens/MyCart';
import Store from './Screens/Store';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>

                    <Route exact path="/signup">
                        <SignUp />
                    </Route>

                    <Route exact path="/registeras">
                        <SignUpAs />
                    </Route>

                    <Route exact path="/customerprofile">
                        <CustomerAccount />
                    </Route>

                    <Route exact path="/editprofile">
                        <EditProfile />
                    </Route>

                    <Route exact path="/complaint">
                        <MakeComplaint />
                    </Route>

                    <Route exact path="/buyitem">
                        <BuyItem />
                    </Route>

                    <Route exact path="/myorders">
                        <MyOrders />
                    </Route>

                    <Route exact path="/mycart">
                        <MyCart />
                    </Route>

                    <Route exact path="/store">
                        <Store />
                    </Route>

                    <Route exact path="/home">
                        <Home />
                    </Route>

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;