import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Slideshow from "./fade.js";

class Partition extends Component{

render(){
	return(
		<div>
<div class="split left">
  <div class="centered">
    <form>
<input placeholder="Search for an image">
</input>
<button type="submit">Search</button>
    </form>
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