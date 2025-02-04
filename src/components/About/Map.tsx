"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "320px",
};

const center = {
  lat: 53.5461, // Edmonton latitude
  lng: -113.4938, // Edmonton longitude
};

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-full">
        Loading Map...
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker
          position={center}
          icon={{
            url: "/memoji-face.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      </GoogleMap>
    </div>
  );
};
