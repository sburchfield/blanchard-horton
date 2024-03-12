import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 36.021556510744276,
  lng: -84.24699525867142,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDaQqIpQRYE6u89Emp4QquOnweJtC8abp0"
  })

  const [map, setMap] = React.useState(null)
  const zoom = 16

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(zoom)

    setMap(map)
  }, [zoom])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { <Marker position={{ lat: 36.021556510744276, lng: -84.24699525867142 }} />}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)