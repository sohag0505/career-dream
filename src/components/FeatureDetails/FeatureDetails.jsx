import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../fakeData/fakedb";

const FeatureDetails = () => {
  const job = useLoaderData();
  console.log(job);
  const handleApplyNow = () => {
    addToDb(job.id);
    alert("added");
  };
  return (
    <div>
      <h2>{job.id}</h2>
      <button onClick={handleApplyNow}>apply now</button>
    </div>
  );
};

export default FeatureDetails;
