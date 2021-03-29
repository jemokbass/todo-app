import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ to, title }) => {
  return (
    <li>
      <NavLink className="navigation-item" to={to}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
