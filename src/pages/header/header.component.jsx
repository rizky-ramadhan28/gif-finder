import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = () => (
  <nav className="navbar sticky-top navbar-dark bg-dark header">
    <Link className="navbar-brand" to="/">
      Gif Finder
    </Link>
  </nav>
);

export default Header;
