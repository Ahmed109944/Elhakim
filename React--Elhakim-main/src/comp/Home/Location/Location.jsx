import { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import staylemaps from "./staylemaps.js";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.008328,
  lng: 31.2066987,
};
const centerMark = {
  lat: 30.0084056,
  lng: 31.2065266,
};

export default function Location() {
  const [markerInfo, setmarkerInfo] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", // Replace with your API key
  });

  return isLoaded ? (
    <GoogleMap
      defaultOptions={{
        styles: staylemaps,
      }}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
    >
      <Marker
        icon={{
          url: "/src/assets/hospital-svgrepo-com.svg",
          strokeWeight: 2,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={centerMark}
        onClick={() => setmarkerInfo(centerMark)}
      />
      {markerInfo && (
        <InfoWindow
          position={markerInfo}
          onCloseClick={() => setmarkerInfo(null)}
        >
          <div>
            <h1 className="text-2xl font-bold">Elhakim</h1>
            <p className="text-lg">
              Welcom to Elhakim <br />
              we hope you enjoy our services
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}
