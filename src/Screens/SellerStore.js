import React, { Component } from 'react';
import axios from 'axios';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import StoreItemsList from "../ScreenSnippets/store/StoreItemsList";
import noItems from "../../public/icons/stores/noitems.png";

class SellerStore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [] 
        };
      }

      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/items`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
      }


    render() {

        const imageStyle = {
            width:400,
            height:400
        };

        return (
            <div className="">
                <AccNavbar />
                <div className="create-store mt-5">
                    <div className="container">

                        {/**---------------------------- header ------------------------------------ */}

                        {this.state.items === [] ? 
                            <StoreItemsList items={this.state.items}/>   
                            :   <div className="noitem  text-center">
                                    <img className="" src={noItems} style={imageStyle} alt="" /> 
                                    <h3>you didn't upload any items yet!</h3>
                                    <a href="/uploaditem" className="btn btn-lg btn-warning">Upload an item</a>
                                </div>
                        }
                    </div>
                </div> 
            </div>
        )
    }
}

export default SellerStore;