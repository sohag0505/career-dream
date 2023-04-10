import React, { useEffect, useState } from "react";
import logo from "../../components/images/sohag.png";
import FeaturedJob from "../FeatureJob/FeaturedJob";
import JobDetails from "../JobDetails/JobDetails";
import "./Home.css";

const Home = () => {
  const [details, setDetails] = useState([]);
  const [feature, setFeature] = useState([]);
  const [fullfeature, setFullFeature] = useState([]);

  const handleShowAllJobBtn = () => {
    setFeature(fullfeature);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("application.json")
      .then((res) => res.json())
      .then((data) => {
        setFullFeature(data);
        const newData = data.slice(0, 4);
        setFeature(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="header-details">
          <h2>
            One Step <br /> Closer To Your <br />
            {<span className="dream">Dream Job</span>}
          </h2>
          <p>
            Explore thousands of job opportunities with all the <br />
            information you need.Its your future. Come <br /> find it. Manage
            all your job application from start to finish.
          </p>
          <button className="btn-job">Get stared</button>
        </div>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="job-container">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="job-details">
        {details.map((det) => (
          <JobDetails key={det.id} details={det} />
        ))}
      </div>
      <div className="job-container">
        <h2>Featured Job</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="feature-container">
        {feature.map((fe) => (
          <FeaturedJob key={fe.id} feature={fe}></FeaturedJob>
        ))}
      </div>
      {feature.length !== fullfeature.length && (
        <div className="btn-all-job">
          <button onClick={handleShowAllJobBtn} className="btn">
            See all jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
