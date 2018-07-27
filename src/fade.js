import React, {Component} from "react";
import house from "./new3/1.jpg";
import night from "./new3/2.jpg";
import forest from "./new3/3.jpg";
import crow from "./new3/4.jpg";
import bike from "./new3/5.jpg";
import Slider from "react-slick";

import "./index.css";

class Slideshow extends Component{
constructor(props){
	super(props);
	this.state={
data:[house,night,forest,crow,bike]

	};


}

render(){
	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
	return(
<span className="imaged">
		<Slider {...settings}>
        <div>
         <img src={ this.state.data[0]}></img>
        </div>
        <div>
         <img src={ this.state.data[1]}></img>
        </div>
        <div>
          <img src={ this.state.data[2]}></img>
        </div>
        <div>
          <img src={ this.state.data[3]}></img>
        </div>
        <div>
          <img src={ this.state.data[4]}></img>
        </div>
      </Slider>
      </span>
      
		);
}

}

export default Slideshow;