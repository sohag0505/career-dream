import React from "react";
import "./JobDetails.css";

const JobDetails = ({ details }) => {
  const { name, img, availableJobNumber } = details;
  return (
    <div className="details-container">
      <div className="cart">
        <img className="pic" src={img} alt={name} />
        <p>{name}</p>
        <p>{availableJobNumber}+ Jobs Available</p>
      </div>
    </div>
  );
};

export default JobDetails;
