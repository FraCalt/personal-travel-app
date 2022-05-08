import React from "react";

const Card = (props: any) => {
  return (
    <div className="card--wrapper">
      <img className="card--image" src={props.imageUrl} />
      <div className="card--info">
        <p>
          <h4>{props.location}</h4>
          <a href="{props.googleMapsUrl}">See on Google Maps</a>
        </p>
        <h1>{props.title}</h1>
        <p>
          <strong>
            {props.startDate} , {props.endDate}
          </strong>
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
