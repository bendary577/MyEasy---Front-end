import React, { Component } from "react";
import egypt from "../../../public/icons/home/egypt.png";
import "../../../public/css/accnavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Pusher from 'pusher-js'

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
        alert(JSON.stringify(data));
        this.setState({
            new_notification_message : data.message
        });
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

    const langIconStyle = {
      width: 30,
      height: 30,
    };

    return (
      <nav className="topnavigation navbar navbar-expand-sm bg-dark navbar-dark">
        {/*------------------------- brand logo ----------------------------------------------*/}

        {/* -- 
                <a className="navbar-brand" href="#">
                    <img src="" alt="Logo" style={ImageStyle} />
                </a>
                */}

        <a class="navbar-brand" href="/home">
          My Easy
        </a>

        {/*------------------------- search bar ---------------------------------------------*/}

        <div class="input-group w-50">
          <input
            type="text"
            class="form-control"
            placeholder="search"
            aria-describedby="sizing-addon2"
          />
        </div>

        {/*------------------------- collapsing button ---------------------------------------*/}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*------------------------- nav links ----------------------------------------------*/}

        <div
          className="ml-5 collapse navbar-collapse accLinks"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2 mt-2">
              <a className="nav-link" href="/stores">
                stores
              </a>
            </li>
            <li className="nav-item mx-2 mt-2">
              <a className="nav-link" href="/mycart">
                cart
              </a>
            </li>
            <li className="nav-item mx-2 mt-2">
              <a className="nav-link" href="/myorders">
                orders
              </a>
            </li>

            <li className="nav-item mx-2 mt-2">
              <a href="">
                <img
                  src={egypt}
                  style={langIconStyle}
                  className="mt-2"
                  alt=""
                />
              </a>
            </li>

            {/*------------------------- notifications drop down links ----------------------------------------------*/}

            <li class="nav-item dropdown mr-0 ml-5">
              <a
                class="nav-link "
                href="/profile"
                id="notificationsDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
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

            {/*------------------------- options drop down links ----------------------------------------------*/}
            <li class="nav-item dropdown mr-0 ml-3">
              <a
                className="nav-link"
                href="/customerprofile"
                id="optionsDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                  <FontAwesomeIcon icon={faCaretDown} className="mt-3"></FontAwesomeIcon>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="optionsDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Edit Profile
                </a>
                <a className="dropdown-item" href="#">
                  Privacy Policy
                </a>
                <a className="dropdown-item" href="#">
                  Terms Of Service
                </a>
                <a className="dropdown-item" href="#">
                  Help
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default CustomerAccNavBar;
