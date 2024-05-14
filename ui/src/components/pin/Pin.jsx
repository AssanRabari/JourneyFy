import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import "./Pin.scss";
const icon = L.icon({ iconUrl: "/marker-icon.png" });

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]} icon={icon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
