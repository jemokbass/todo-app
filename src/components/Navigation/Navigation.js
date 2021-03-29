import React, { useState } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  const [navigationItem] = useState([
    { title: 'Home', to: '/', exact: true },
    { title: 'Sign In', to: '/sign-in' },
    { title: 'Sign Up ', to: '/sign-up' },
    { title: 'Todo List', to: '/todo-list' },
    { title: 'New Todo', to: '/new-todo' },
  ]);

  const navigationList = navigationItem.map(navItem => (
    <NavigationItem title={navItem.title} to={navItem.to} key={navItem.title} exact={navItem.exact} />
  ));

  return (
    <nav className="navigation">
      <ul>{navigationList}</ul>
    </nav>
  );
};

export default Navigation;
