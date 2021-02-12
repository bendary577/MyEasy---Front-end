import React, { Component } from "react";
import image from "../../../public/images/person_2.jpg";

class Comment extends Component {
  render() {
    const imageStyle={
        width:40,
        height:40
    };

    return (
      <div className="comment my-1 p-2">
          <div className="d-flex">
              <div className="comment-image mt-4">
                    <img className="rounded-circle" src={image} style={imageStyle} alt=""/>
              </div>
              <div className="comment-body rounded bg-light ml-2 p-3 w-100">
                <h6 className="">Comment Title</h6>
                <p>comment text lorem ipsum dolen oeraul solas irena</p>
             </div>   
          </div>
          <div className="d-flex ml-5">
              <p className="font-weight-light text-muted mr-3">reply</p>
              <p className="font-weight-light text-muted">from 23 sec</p>
          </div>
      </div>
    );
  }
}

export default Comment;
