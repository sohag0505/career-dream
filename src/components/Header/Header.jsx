import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2>Career Dream</h2>
      <div className="nav-content">
        <Link to="/">Home</Link>
        <Link to="/job">Applied Job</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <button className="btn-apply">Start appling</button>
    </nav>
  );
};

export default Header;
