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
        <LoadScript googleMapsApiKey="AIzaSyALWis7eNAWZ2cJbUZ_qX7LrZdfhdhrAjo">
          <GoogleMap id="map" center={center} zoom={10}>
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Map;
