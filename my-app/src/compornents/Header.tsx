import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          掲示板
        </Link>
      </h1>
    </header>
  );
};
