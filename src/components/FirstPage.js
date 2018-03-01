import React from "react";

const FirstPage = (props) => {
	return (
		<div className="container">
			<div className="firstHalf" id="firstPageFirstHalf">
				<h1 id="name">Stefan Krejovic</h1>
				<p id="job">Junior Front-End Web Developer</p>
			</div>
			<div className="secondHalf" id="firstPageSecondHalf">
				<p id="description">I'am front-end developer based in Uzice, currently looking for a junior job or internship.
				</p>
			</div>
		</div>
	);
};

export default FirstPage;