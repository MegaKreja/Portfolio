import React from "react";
import img from "../styles/images/recipe-box.jpg";

const SecondPage = (props) => {
	return (
		<div className="container">
			<div className="firstHalf" id="imgPageFirstHalf">
				<img src={img} alt=""/>
			</div>
			<div className="secondHalf" id="imgPageSecondHalf">
				<a href="https://codepen.io/MegaKreja/full/zpvGJB/">Recipe Box</a>
				<p>HTML   CSS   JAVASCRIPT   REACT</p>
			</div>
		</div>
	);
};

export default SecondPage;