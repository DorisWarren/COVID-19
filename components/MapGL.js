import React, { useState} from "react";
import ReactMapGL from "react-map-gl"


export default function MapGL () {
    const [viewport, setViewPort] = useState({
        latitude:39.381266,
        longitude:-97.922211,
        zoom: 10,
        width: 400,
        height: 400,
    })
    return (
    <div>
        <ReactMapGL
         {...viewport} 
         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
        Markers here
         </ReactMapGL>
    </div>
    );
}