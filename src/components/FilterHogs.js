
const FilterHogs = ({ setHogSearch, isHogGreased, setIsHogGreased }) => {

    return (
        <div>
            <input type="text" name="name" placeholder="Search Hogs by Name..." onChange={(event) => setHogSearch(event.target.value.toLowerCase())}></input>
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