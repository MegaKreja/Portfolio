import React from "react";
import img from "../styles/images/game-of-life.png";

const SecondPage = (props) => {
	return (
		<div className="container">
			<div className="firstHalf" id="imgPageFirstHalf">
				<img src={img} alt=""/>
			</div>
			<div className="secondHalf" id="imgPageSecondHalf">
				<a href="https://fcc-game-of-life.herokuapp.com/">Game of Life</a>
				<p>HTML   CSS   JAVASCRIPT   REACT</p>
			</div>
		</div>
	);
};

export default SecondPage;
