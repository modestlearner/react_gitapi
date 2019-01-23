import React, { Component } from "react";
import Search from "./search";
import Card from "./card";
import '../components/style.css'

class Home extends Component {
  state = {
    user:"modestlearner",
    username: "",
    realName: "",
    avatar: "",
    location: "",
    repos: "",
    followers: "",
    url: "",
    notFound: ""
  };
  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.user}`;
    this.fetchApi(url);
  }
  fetchApi(url) {
    // console.log(this.state)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          username: data.login,
          realName: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          url: data.html_url,
          notFound: data.message
        });
      })
      .catch(err => console.log("oh no!"));
  }
  handleClick=e=>{
    e.preventDefault()
    this.setState({user:e.target.value})
  }
  handleSub=()=>{
    let url = `https://api.github.com/users/${this.state.user}`;
    this.fetchApi(url);

  }

  render() {
    return (
        <div><Search onCli = {this.handleClick} onSub = {this.handleSub}></Search><Card st={this.state}></Card></div>
        
    );
  }
}

export default Home;
