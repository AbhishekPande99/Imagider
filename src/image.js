import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Slideshow from "./fade.js";
import house from "./new3/1.jpg";
import night from "./new3/2.jpg";
import forest from "./new3/3.jpg";
import crow from "./new3/4.jpg";
import bike from "./new3/5.jpg";



class Partition extends Component{
	constructor(props){
	super(props);
	this.state={
arraya: [house,night,forest,crow,bike],
integer:1,
	};
this.showItem=this.showItem.bind(this);

}


showItem(e) {
	if(this._inputElement.value!==""){
		if(this._inputElement.value=="house"){
		this.setState({ integer : 0});
		}
		if(this._inputElement.value=="night"){
		this.setState({ integer : 1});
		}
		if(this._inputElement.value=="forest"){
		this.setState({ integer : 2});
		}
		if(this._inputElement.value=="crow"){
		this.setState({ integer : 3});
		}
		if(this._inputElement.value=="bike"){
		this.setState({ integer : 4});
		}
	}
	console.log(this.state.integer);
	e.preventDefault();
}


render(){
	return(
		<div>
<div class="split left">
  <div class="centered">
    <form onSubmit= { this.showItem }>
<input placeholder="Search for an image" ref={(a) => this._inputElement = a}>
</input>
<button type="submit">Search</button>
    </form>
    <p>
    1)house
    <br></br>
    2)night
    <br></br>
    3)forest
    <br></br>
    4)crow
<br></br>
    5)bike
    </p>
    <br></br>
   <div className="search">
   <img  src={this.state.arraya[this.state.integer]}></img>
   </div> 
  </div>
</div>

<div class="split right">
  <div >
    <Slideshow/>
  </div>
</div>
</div>

		);
}

}

export default Partition;