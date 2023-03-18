
const FilterHogs = ({ filterGreasedHogs, isHogGreased, setIsHogGreased }) => {
        
    return (
        <div>
            <button onClick={filterGreasedHogs}>{ isHogGreased ? "Click for Ungreased Hogs" : "Click for Greased Hogs" }</button>
            <button onClick={() => setIsHogGreased(null)}>"Click for All Hogs"</button>
        </div>
    )
}

export default FilterHogs;