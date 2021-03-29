import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ to, title, exact }) => {
  return (
    <li>
      <NavLink className="navigation-item" to={to} exact={exact}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
