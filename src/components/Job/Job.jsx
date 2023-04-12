import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShoppingCart } from "../../fakeData/fakedb";
import "./Job.css";

const Job = () => {
  const [carts, setCarts] = useState([]);
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
      });
  }, []);
  console.log(carts);

  return (
    <div className="applied-job-container">
      <div className="applied-job-title">
        <h2>Applied Jobs</h2>
        <div>
          <select>
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
            <div className="applied-button">
              <button>{cart.jobType}</button>
            </div>
            <p>Location: {cart.jobLocation}</p>
          </div>
          <div className="applied-btn">
            <div>
              <Link to={`/featureDetails/${cart.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
