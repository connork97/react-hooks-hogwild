import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import FilterHogs from "./FilterHogs";

import hogs from "../porkers_data";

function App() {

	const [isHogGreased, setIsHogGreased] = useState(null);

	const filterGreasedHogs = () => {
		setIsHogGreased(!isHogGreased);

	}
    const renderHogs = hogs.map((hog) => {
        return (
            isHogGreased === null || hog.greased === isHogGreased ?
            <Tile 
			name={hog.name}
			image={hog.image}
			specialty={hog.specialty}
			weight={hog.weight}
			greased={hog.greased}
			medal={hog["highest medal achieved"]}
			key={hog.name}
			
			hogs={hogs}
			isHogGreased={isHogGreased}
            />
            : null
        )
    })

	return (
		<div className="App">
			<Nav />
			<FilterHogs filterGreasedHogs={filterGreasedHogs} hogs={hogs} isHogGreased={isHogGreased} setIsHogGreased={setIsHogGreased} />
			{renderHogs}
		</div>
	);
}

export default App;
