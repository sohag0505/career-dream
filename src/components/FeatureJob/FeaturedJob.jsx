import React from "react";
import { Link } from "react-router-dom";
import "./FeatureJob.css";

const FeaturedJob = ({ feature }) => {
  const { id, email, img, companyName, name, jobType, jobLocation, salary } =
    feature;
  return (
    <div className="feature-container2">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <h3>{companyName}</h3>
      <p>{jobType}</p>
      <p>{jobLocation}</p>
      <p>{salary}</p>
      <div>
        <Link to={`/featureDetails/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;
