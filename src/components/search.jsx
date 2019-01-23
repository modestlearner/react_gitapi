import React, { Component } from 'react';
import '../components/style.css'


class Search extends Component {
    render() { 
        // console.log(this.state)
        return ( <div class="container">
        <div class="row align-items-center search">
           <div class="col-lg-6 mx-auto">
           
               <div class="input-group">
                   <input type="text" class="form-control input" placeholder="Enter Username" name = 'search' id='search' onChange = {this.props.onCli}/>
                   <span class="input-group-btn">
                    <input class="btn btn-primary" type="submit" value="Search User" onClick={this.props.onSub}></input>
                   </span>
               </div>
               
           </div>
       </div>
   </div> );
    }
}
 
export default Search;