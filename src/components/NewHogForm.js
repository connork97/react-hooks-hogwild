
const NewHogForm = ({ hogsState, setHogsState, newHog, setNewHog }) => {

    const handleNewHogTextChange = (event) => {
        setNewHog({...newHog, [event.target.name]: event.target.value})
    }

    const handleNewHogOtherChange = (event) => {
        event.target.name === "weight" ?
        setNewHog({...newHog, [event.target.name]: Number(event.target.value)})
        : setNewHog({...newHog, [event.target.name]: event.target.checked}
        )
    }

    const handleNewHogSubmit = (event) => {
        setHogsState((prevHogsState) => {
            return [...prevHogsState, newHog]
        })
        event.preventDefault();
    }

    return (
    <form onSubmit={handleNewHogSubmit}>
        <h3>Create a Hog!</h3>
        <input type="text" name="name" placeholder="Name" onChange={handleNewHogTextChange}></input>
        <input type="text" name="specialty" placeholder="Specialty" onChange={handleNewHogTextChange}></input>
        <input type="number" name="weight" placeholder="Weight" onChange={handleNewHogOtherChange}></input>
        <br></br><br></br>
        <input type="text" name="highest medal achieved" placeholder="Highest Medal Achieved" onChange={handleNewHogTextChange}></input>
        <input type="text" name="image" placeholder="Paste a Link to a Photo Here" onChange={handleNewHogTextChange}></input>
        <label htmlFor="checkbox">
            <input type="checkbox" checked={newHog.greased} name="greased" onChange={handleNewHogOtherChange}></input>
            Is your hog greased?
        </label>
        <button type="submit">Submit</button>
    </form>
    )
}

export default NewHogForm;