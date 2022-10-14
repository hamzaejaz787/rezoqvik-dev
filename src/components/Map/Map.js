import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./map.css";

const center = {
  lat: 33.6844,
  lng: 73.0479,
};

const Map = () => {
  return (
    <>
      <div className="map__container">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap id="map" center={center} zoom={10}>
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Map;
