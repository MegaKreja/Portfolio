import React from "react";
import FlipPage from "react-flip-page";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";


class Portfolio extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div id="flipPage">
				<FlipPage responsive={true} showSwipeHint>
					<FirstPage />
					<SecondPage />
					<ThirdPage />
					<FourthPage />
					<FifthPage />
					<SixthPage />
				</FlipPage>
			</div>
		);
	}
}

export default Portfolio;