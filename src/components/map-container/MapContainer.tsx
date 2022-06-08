import React from 'react'
import Map from './map/Map'

/**
 * Component for showing details of the map container.
 *
 * @component
 * @example
 * return (
 *      <>
 *           <div>MapContainer</div>
 *          <Map centerX={centerX} centerY={centerY} zoom={zoom} extent={extent}/>
 *       </>
 *  )
 */

const MapContainer = () => {
    const centerX = 3395271.8857;
    const centerY = 4835689.4652;
    const zoom = 16.5;
    const extent = [2817774.6107, 4265797.6745, 5102324.5121, 5278435.4253]

    /**
     * return centerX (for jsdoc)
     * @param   {number} center  CenterX
     * @return  {number}         CenterX
     */
    const getCenterX = (centerX: number) => {
        console.log(centerX);
        return centerX;
    }

    return (
        <>
            <button onClick={()=>getCenterX(centerX)}>Click me!!</button>
            <Map centerX={centerX} centerY={centerY} zoom={zoom} extent={extent} />
        </>
    )
}

export default MapContainer