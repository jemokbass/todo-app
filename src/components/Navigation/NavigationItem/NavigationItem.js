import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  const { to, title, exact, className } = props;

  return (
    <li className={className}>
      <NavLink className="navigation-item" to={to} exact={exact}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
