import React from "react";
import codepen from "../styles/images/codepen.png";
import git from "../styles/images/git.png";
import mail from "../styles/images/mail.png";

const SixthPage = (props) => {
	return (
		<div className="container">
			<div className="firstHalf" id="sixthPageFirstHalf">
				<h1>More projects on:</h1>
				<div>
					<a href="https://codepen.io/MegaKreja/"><img src={codepen} alt="codepen"/></a>
					<a href="https://github.com/MegaKreja"><img src={git} alt="github"/></a>
				</div>
				
			</div>
			<div className="secondHalf" id="sixthPageSecondHalf">
				<img src={mail} alt="mail"/>
				<h1>Contact</h1>
				<p>kreja95ue@gmail.com</p>
			</div>
		</div>
	);
};

export default SixthPage;