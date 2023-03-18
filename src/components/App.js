import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import FilterHogs from "./FilterHogs";

import hogs from "../porkers_data";

function App() {

	const [hogsState, setHogsState] = useState(hogs);
	console.log(hogsState)

	const [hogSearch, setHogSearch] = useState("All")

	const [isHogGreased, setIsHogGreased] = useState(null);

	const filterGreasedHogs = () => {
		setIsHogGreased(!isHogGreased);

	}
    const renderHogs = hogsState.map((hog) => {
        return (
            (isHogGreased === null || hog.greased === isHogGreased) && (hogSearch === "All" || hogSearch === "") || ((hog.name.toLowerCase().includes(hogSearch.toLowerCase()) && (isHogGreased === null || hog.greased === isHogGreased))) ?
            <HogTiles 
				name={hog.name}
				image={hog.image}
				specialty={hog.specialty}
				weight={hog.weight}
				greased={hog.greased}
				medal={hog["highest medal achieved"]}
				key={hog.name}
				
				hogs={hogsState}
				isHogGreased={isHogGreased}
            />
            : null
        )
    })

	return (
		<div className="App">
			<Nav />
			<FilterHogs 
				hogSearch={hogSearch}
				setHogSearch={setHogSearch}
				hogsState={hogsState}
				setHogsState={setHogsState}

				filterGreasedHogs={filterGreasedHogs} 
				isHogGreased={isHogGreased} 
				setIsHogGreased={setIsHogGreased} 
			/>
			{renderHogs}
		</div>
	);
}

export default App;
