import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../fakeData/fakedb";

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
    <div>
      <h2>This is job page.</h2>
      {carts.map((cart) => (
        <h2>
          {cart.name}--{cart.companyName}
        </h2>
      ))}
    </div>
  );
};

export default Job;
