
const HogDetails = ({ specialty, weight, greased, medal }) => {
    return (
        <div>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>{greased ? "Greased!" : "Not Greased"}</p>
            <p>Highest Medal Achieved: {medal}</p>
        </div>
    )
}

export default HogDetails;