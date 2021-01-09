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
import Uploaditem from './Screens/Uploaditem';
<<<<<<< HEAD
import Invoice from './Screens/Invoice';
import MyInvoices from './Screens/MyInvoices';
=======
import MakeInvoice from './Screens/MakeInvoice';
>>>>>>> d7590ac0b8122aac8a46bf61b89e5414232216c5
import ViewItemDetails from './Screens/ViewItemDetails';
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

                    <Route exact path="/viewitem">
                        <ViewItemDetails />
                    </Route>

                    <Route exact path="/uploaditem">
                        <Uploaditem />
                    </Route>

                    <Route exact path="/invoice">
                        <MakeInvoice />
                    </Route>

                    <Route exact path="/myinvoice">
                        <MyInvoices />
                    </Route>

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
