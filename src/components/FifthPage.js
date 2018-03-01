import React from "react";
import img from "../styles/images/pomodoro-clock.png";

const FifthPage = (props) => {
	return (
		<div className="container">
			<div className="firstHalf" id="imgPageFirstHalf">
				<img src={img} alt=""/>
			</div>
			<div className="secondHalf" id="imgPageSecondHalf">
				<a href="https://codepen.io/MegaKreja/full/yzeBxO/">Pomodoro Clock</a>
				<p>HTML   CSS   JAVASCRIPT</p>
			</div>
		</div>
	);
};

export default FifthPage;