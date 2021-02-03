import React, { Component } from 'react';
import StoreItemCard from "../store/StoreItemCard";


class StoreItemsList extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              {
                this.props.items.map(item=>
                                          <div className="col-xs-12 col-md-4" key={item.key}>
                                              <StoreItemCard item={item}/>
                                          </div>
                  )
              }
            </div>
          </div>
        )
    }
}

export default StoreItemsList;