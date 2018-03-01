import React from "react";
import img from "../styles/images/tic-tac-toe.jpg";

const FourthPage = (props) => {
	return (
		<div className="container">
			<div className="firstHalf" id="imgPageFirstHalf">
				<img src={img} alt=""/>
			</div>
			<div className="secondHalf" id="imgPageSecondHalf">
				<a href="https://codepen.io/MegaKreja/full/eGvjzP/">Tic Tac Toe</a>
				<p>HTML   CSS   JAVASCRIPT</p>
			</div>
		</div>
	);
};

export default FourthPage;