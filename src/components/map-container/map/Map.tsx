import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Map as OlMap, View } from 'ol';
import { MapContext } from './MapContext';
import './Map.scss'
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

interface Props {
    centerX: number,
    centerY: number,
    zoom: number,
    extent: Array<any>

}

/**
 * Component for showing details of the map.
 *
 * @component
 * @example
 * return (
 *   <MapContext.Provider value={olMap}>
 *       {props.children}
 *   </MapContext.Provider>
 * )
 */

const Map = (props: PropsWithChildren<Props>) => {

    const [olMap, setOlMap] = useState<OlMap | null>()
    const mapRef = useRef(document.createElement('div'))

    useEffect(() => {
        let map = new OlMap({
            view: new View({
                center: [props.centerX, props.centerY],
                zoom: props.zoom
            }),
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            controls:[],
            target: mapRef.current
        })

        setOlMap(map);
        (window as any).map = map

        return () => map.dispose();
    }, [])


    return (
        <>
            <div className='Map' ref={mapRef}></div>
            {
                olMap &&
                <MapContext.Provider value={olMap}>
                    {props.children}
                </MapContext.Provider>
            }
        </>
    )
}

export default Map