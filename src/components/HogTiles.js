import React, { useState } from "react";
import HogDetails from "./HogDetails";

const HogTiles = ({ name, image, specialty, weight, greased, medal }) => {
    
    const [isPigHidden, setIsPigHidden] = useState(false);
    
    const [isHogClicked, setIsHogClicked] = useState(false);
    
    const hidePigText = isPigHidden ? `Click to See ${name} Again!` : `Click to Hide ${name} :(`

    return (
        <div className="ui grid container two wide column pigTileContainer cards" style={{justifyContent: "center", marginTop: "5vh", display: "flex"}}>
            {!isPigHidden ?
            <div className={greased ? "greased pigTile card" : "not-greased pigTile card"}  onClick={() => setIsHogClicked(!isHogClicked)}>
                <h1>{name}</h1>
                <img src={image}></img>
                {isHogClicked ? 
                <HogDetails 
                    specialty={specialty}
                    weight={weight}
                    greased={greased}
                    medal={medal}
                    key={specialty}
                /> 
                : null}
            </div>
            : null}
            <button 
                onClick={() => setIsPigHidden(!isPigHidden)}
                style={{
                    position: "absolute", 
                    margin: "-2.5vh", 
                    display: "flex", 
                    flexDirection: "row"
                }}>
                {hidePigText}
                </button>
        </div>
    )
}

export default HogTiles;