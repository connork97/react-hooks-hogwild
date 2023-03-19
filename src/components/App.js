import React, { useState } from "react";
import Nav from "./Nav";
import NewHogForm from "./NewHogForm";
import FilterHogs from "./FilterHogs";
import HogTiles from "./HogTiles";

import hogs from "../porkers_data";

function App() {

	const [hogsState, setHogsState] = useState(hogs);

	const [hogSearch, setHogSearch] = useState("")
	const [hogWeight, setHogWeight] = useState({
		min: 0,
		max: 1000
	})

	const [newHog, setNewHog] = useState({
		name: "",
		specialty: "",
		greased: false,
		weight: 0,
		"highest medal achieved": "",
		image: ""
	})

	const [isHogGreased, setIsHogGreased] = useState(null);
	
    const renderHogs = () => hogsState.map((hog) => {
	// 	if ((isHogGreased === null || hog.greased === isHogGreased) && (hog.weight >= hogWeight.min && hog.weight <= hogWeight.max)) {
	// 		if (hog.name.toLowerCase().includes(hogSearch.toLowerCase()) && (isHogGreased === null || hog.greased === isHogGreased) && (hog.weight >= hogWeight.min && hog.weight <= hogWeight.max)) {
	// 		return (
	// 			<HogTiles 
	// 				name={hog.name}
	// 				image={hog.image}
	// 				specialty={hog.specialty}
	// 				weight={hog.weight}
	// 				greased={hog.greased}
	// 				medal={hog["highest medal achieved"]}
	// 				key={hog.name}
	// 				hogs={hogsState}
	// 				isHogGreased={isHogGreased}
    //         	/>
	// 		)
	// 		}
	// 	}
			
        return (
            (isHogGreased === null || hog.greased === isHogGreased) && (hogSearch === "") && (hog.weight >= hogWeight.min && hog.weight <= hogWeight.max) || (hog.name.toLowerCase().includes(hogSearch.toLowerCase()) && (isHogGreased === null || hog.greased === isHogGreased) && (hog.weight >= hogWeight.min && hog.weight <= hogWeight.max)) ?
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
				hogWeight={hogWeight}
				setHogWeight={setHogWeight}
				isHogGreased={isHogGreased} 
				setIsHogGreased={setIsHogGreased} 
			/>
			<br></br>
			<NewHogForm 
				hogsState={hogsState}
				setHogsState={setHogsState}
				newHog={newHog}
				setNewHog={setNewHog}
				// greased={newHog.greased}
			/>
			{renderHogs()}
		</div>
	);
}

export default App;
