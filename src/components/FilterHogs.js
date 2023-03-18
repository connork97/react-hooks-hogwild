
const FilterHogs = ({ setHogSearch, hogWeight, setHogWeight, isHogGreased, setIsHogGreased }) => {

    const handleWeightChange = (event) => {
        event.target.value !== "" ?
        setHogWeight({...hogWeight, [event.target.name]: Number(event.target.value)})
        : setHogWeight({...hogWeight, min: 0, max: 1000})
    }

    return (
        <div>
            <input type="text" name="name" placeholder="Search Hogs by Name..." onChange={(event) => setHogSearch(event.target.value.toLowerCase())}></input>
            <input type="number" step=".1" name="min" placeholder="Minimum Weight" onChange={handleWeightChange}></input>
            <input type="number" step=".1" name="max" placeholder="Maximum Weight" onChange={handleWeightChange}></input>
            <button onClick={() => setIsHogGreased(!isHogGreased)}>
                { isHogGreased ? "Click for Ungreased Hogs" : "Click for Greased Hogs" }
            </button>
            <button onClick={() => setIsHogGreased(null)}>
                "Click for All Hogs"
            </button>
        </div>
    )
}

export default FilterHogs;