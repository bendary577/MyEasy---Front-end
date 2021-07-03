import React, { Component } from "react";
import "../../../public/css/accnavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Pusher from 'pusher-js';
import logo from '../../../public/images/Home/myeasy-logo.png'
import LanguageSwitcher from "../../Components/Buttons/LanguageSwitcher";

class CustomerAccNavBar extends Component {

  state = {
    new_notification_message : "",
    notifications_number: 0,
  };

  componentDidMount() {

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
      var pusher = new Pusher("aa38bb9a07c03b75f95d", {
        cluster: "us2",
        encrypted: true,
      });
      
      var channel = pusher.subscribe("new_order_notification");
      channel.bind("pusher:subscription_succeeded",  (data) => {
        /*
        alert(JSON.stringify(data));
        this.setState({
            new_notification_message : data.message
        });
        */
      });
  }

  clearNotifications = (e)=> {
    e.preventDefault();
    this.setState({
        new_notification_message : "",
        notifications_number : 0
    })
  }

  render() {

    const logoStyle = {
      width: 90,
      height: 90,
      marginTop : 5
    };

    return (
      /*
      <nav className="topnavigation navbar navbar-expand-lg bg-dark navbar-dark">

        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo"  style={logoStyle}/>
        </a>
        
          <div class="">
                <form class="d-flex input-group ">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                </form>
              </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="ml-5 collapse navbar-collapse accLinks justify-content-center"
          id="collapsibleNavbar"
          
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-1 mt-2">
              <a className="nav-link" href="/stores">
                browse stores
              </a>
            </li>
            <li className="nav-item mx-1 mt-2">
              <LanguageSwitcher />
            </li>

            <li class="nav-item dropdown mr-0 ml-5">
              <a
                class="nav-link "
                href="/profile"
                id="notificationsDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="40"
                  height="40"
                  alt="logo"
                  className="rounded-circle"
                  onClick={this.clearNotifications}
                />{ this.state.notifications_number > 0 ? <span class="badge badge-pill badge-danger align-top">{this.state.notifications_number}</span> : "" } 
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="notificationsDropdownMenuLink"
              >
                <h5 className="font-weight-bold p-2">Notifications</h5>
                {this.state.new_notification_message === "" ? "" : <h6 className="p-2">you have no notifications yet</h6>}
              </div>
            </li>

            <li class="nav-item dropdown mr-0">
              <a
                className="nav-link"
                href="/customerprofile"
                id="optionsDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                  <FontAwesomeIcon icon={faCaretDown} className="mt-3"></FontAwesomeIcon>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="optionsDropdownMenuLink"
              >
                 <a className="dropdown-item" href="profile">
                  Profile
                </a>

                <a className="dropdown-item" href="editprofile">
                  Edit Profile
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      */
      <nav class="navbar navbar-icon-top navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/profile">Profile</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <a href="/search" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</a>
          </form>
          <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <LanguageSwitcher />  
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-bell">
                  <span class="badge badge-danger">1</span>
                </i>
                Notifications
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#"><strong>Notifications</strong></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item alert alert-success" href="/newOrder">a customer ordered a product</a>
                <a class="dropdown-item" href="#">Another action</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user">
                  <span class="badge badge-primary">11</span>
                </i>
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/edit_profile">Edit Profile</a>
                <a class="dropdown-item" href="#"></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/signin"> Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>


    );
  }
}

export default CustomerAccNavBar;
