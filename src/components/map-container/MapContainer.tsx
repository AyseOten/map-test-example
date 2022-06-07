import React from 'react'
import Map from './map/Map'

const MapContainer = () => {
    const centerX = 3395271.8857;
    const centerY = 4835689.4652;
    const zoom = 16.5;
    const extent = [2817774.6107, 4265797.6745, 5102324.5121, 5278435.4253]

    return (
        <>
            <div>MapContainer</div>
            <Map centerX={centerX} centerY={centerY} zoom={zoom} extent={extent}/>
        </>
    )
}

export default MapContainer