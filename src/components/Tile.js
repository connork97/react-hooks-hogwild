import React, { useState } from "react";
import HogDetails from "./HogDetails";

const Tile = ({ isHogGreased, name, image, specialty, weight, greased, medal }) => {
    
    const [isHogClicked, setIsHogClicked] = useState(false);
    
    return (
        <div>
            <div className={greased ? "greased pigTile" : "not-greased pigTile"} onClick={() => setIsHogClicked(!isHogClicked)}>
                <h1>{name}</h1>
                <img src={image} alt="Hog Image"></img>
                {isHogClicked ? 
                <HogDetails 
                    specialty={specialty}
                    weight={weight}
                    greased={greased}
                    medal={medal}
                /> 
                : null}
            </div>
        </div>
    )
}

export default Tile;