import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
