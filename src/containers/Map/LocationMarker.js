import React, { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { loadPosition, fetchCountry } from "../../redux/actions/mapActions";

export default function LocationMarker() {
  const dispatch = useDispatch();
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      // map.locate();
      // console.log(map.getCenter());
      //const center = map.getCenter();
      dispatch(loadPosition(e.latlng));
      dispatch(fetchCountry(e.latlng));
      map.setView(e.latlng);
      map.fireEvent("locationfound", e);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={Icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
