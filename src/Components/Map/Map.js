import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 36.021556510744276, lng: -84.24699525867142 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 36.021556510744276, lng: -84.24699525867142 }} />}
  </GoogleMap>
))

  export default Map;