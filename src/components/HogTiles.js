import React, { useState } from "react";
import HogDetails from "./HogDetails";

const HogTiles = ({ name, image, specialty, weight, greased, medal }) => {
    
    const [isHogClicked, setIsHogClicked] = useState(false);
    
    return (
        <div className="ui grid container pigTileContainer cards" style={{justifyContent: "center", marginTop: "5vh", display: "flex"}}>
            <div className={greased ? "greased pigTile card" : "not-greased pigTile card"} onClick={() => setIsHogClicked(!isHogClicked)}>
                <h1>{name}</h1>
                <img src={image} alt="Hog Image"></img>
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
        </div>
    )
}

export default HogTiles;