import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Card = (props: any) => {
  return (
    <div className="card--wrapper">
      <img className="card--image" src={props.imageUrl} />
      <div className="card--info">
        <h4>{props.location} </h4>
        <p className="card--position">
          <LocationOnIcon sx={{ color: "darkred", width: "20px" }} />
          <a className="link" href={props.googleMapsUrl}>
            See on Google Maps
          </a>
        </p>
        <h1>{props.title}</h1>
        <p className="card--date">
          <strong >
            {props.startDate} , {props.endDate}
          </strong>
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
