import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShoppingCart } from "../../fakeData/fakedb";
import "./Job.css";

const Job = () => {
  const [carts, setCarts] = useState([]);
  const [fullCarts, setFullCarts] = useState([]);

  const [selectedValue, setSelectedValue] = useState("filter");

  const handleSelectChange = (event) => {
    const selection = event.target.value;
    if (selection === "both") {
      setCarts(fullCarts);
    } else {
      const filteredJob = fullCarts.filter((currentJob) => {
        const jobTypes = currentJob.jobType.join(" ");
        if (jobTypes.toLowerCase().includes(selection.toLocaleLowerCase())) {
          return currentJob;
        }
      });
      setCarts(filteredJob);
    }
    setSelectedValue(selection);
  };

  useEffect(() => {
    fetch("application.json")
      .then((res) => res.json())
      .then((data) => {
        const storedCart = getShoppingCart();

        const savedCart = [];

        for (const id in storedCart) {
          const addedProduct = data.find((pd) => pd.id === parseInt(id));
          if (addedProduct) {
            savedCart.push(addedProduct);
          }
        }
        setCarts(savedCart);
        setFullCarts(savedCart);
      });
  }, []);

  return (
    <div className="applied-job-container">
      <div className="applied-job-title">
        <h2>Applied Jobs</h2>
        <div className="applied-filter">
          <select
            className="filter-area"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="filter" disabled selected>
              Filter
            </option>
            <option value="both">Both</option>
            <option value="remote">Remote</option>
            <option value="full time">Full Time</option>
          </select>
        </div>
      </div>
      {carts.map((cart) => (
        <div className="applied-cart">
          <div className="applied-img">
            <img className="img" src={cart.img} />
          </div>
          <div className="applied-cart-details">
            <p>{cart.name}</p>
            <p>{cart.companyName}</p>
            <div className="applied-cart-button">
              {cart?.jobType.map((jb) => (
                <div className="applied-button">
                  <button>{jb}</button>
                </div>
              ))}
            </div>
            <p>Location: {cart.jobLocation}</p>
          </div>
          <div className="applied-btn ">
            <Link to={`/featureDetails/${cart.id}`}>
              <button className="btn-applied">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
