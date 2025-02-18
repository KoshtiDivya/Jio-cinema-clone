import React from "react";
import "../styles/FeaturesShow.css";
const FeaturesShow = (props) => {
  //  console.log(props.movie)
  return (
    <div className="show">
      <img
        src={props.movie.imageUrl}
        alt="poster"
      />
      <div className="show-info">
        <h3>{props.movie.name}</h3>
      </div>
    </div>
  );
};

export default FeaturesShow;
