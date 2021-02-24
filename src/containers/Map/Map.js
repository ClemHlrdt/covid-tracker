import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import LocationMarker from "./LocationMarker";
import classes from "./Map.module.css";
import MapOverlay from "./MapOverlay";

export default function Map() {
  const defaultPosition = [48.864716, 2.349];
  const history = useSelector((state) => state.tracker.countryHistory);

  return (
    <div className={classes.Map}>
      <MapContainer
        center={defaultPosition}
        zoom={4}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      {history.country ? <MapOverlay results={history} /> : null}
    </div>
  );
}
