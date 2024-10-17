import React from "react";

//include images into your bundle
import { Game } from "./game";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Game />
		</div>
	);
};

export default Home;
