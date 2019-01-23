import React, { Component } from "react";
import "../components/style.css";
class Card extends Component {
  state = {};

  render() {
    if(this.props.st.notFound==='Not Found'){
      return <h3 className="notfound">User not found. Try again!</h3>
    }
    else{
    console.log(this.props);
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto  align-items-center card ">
            <img src={this.props.st.avatar} class="image" />
            <div class ='txt'>
            <u>{this.props.st.realName}</u>
            </div>
            <div>
              {this.props.st.username}
            </div>
            <div class = 'repos'>Number of Repos: {this.props.st.repos}</div>
            <div class = 'follow'>Number of Followers: {this.props.st.followers}</div>
          </div>
        </div>
      </div>
    );
  }}
}

export default Card;
