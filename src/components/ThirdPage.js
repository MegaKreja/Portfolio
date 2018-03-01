import React from "react";
import img from "../styles/images/simon-says.jpg";

const ThirdPage = (props) => {
	return (
		<div className="container">
			<div className="firstHalf" id="imgPageFirstHalf">
				<img src={img} alt=""/>
			</div>
			<div className="secondHalf" id="imgPageSecondHalf">
				<a href="https://codepen.io/MegaKreja/full/YrEQjR/">Simon Says</a>
				<p>HTML   CSS   JAVASCRIPT</p>
			</div>
		</div>
	);
};

export default ThirdPage;