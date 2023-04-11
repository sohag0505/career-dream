import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../fakeData/fakedb";
import "./FeatureDetails.css";

const FeatureDetails = () => {
  const job = useLoaderData();
  console.log(job);
  const handleApplyNow = () => {
    addToDb(job.id);
    alert("added");
  };
  return (
    <div className="featureDetailsContainer">
      <div className="featureDetailsTitle">
        <h2>Job Details</h2>
      </div>
      <div className="featureDetails">
        <div>
          <p>
            <b>Job Description:</b> {job.jobDescription}
          </p>
          <p>
            <b>Job Responsibility: </b>
            {job.jobResponsibility}
          </p>
          <p>
            <b>
              Educational Requirment: <br />
            </b>
            {job.educationRequirement}
          </p>
          <p>
            <b>
              Experience: <br />
            </b>
            {job.jobExperience} years in this field
          </p>
        </div>
        <div className="FeatureCart">
          <h4>Job Details</h4>
          <hr />
          <p>Job Title: {job.name}</p>
          <p>Salary: {job.salary}</p>
          <p>Location: {job.jobLocation}</p>

          <h4>Contact Information</h4>
          <hr />
          <p>Phone: {job.phone}</p>
          <p>Email: {job.email}</p>
          <button onClick={handleApplyNow}>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
