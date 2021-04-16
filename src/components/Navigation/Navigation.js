import React from 'react';
import { useSelector } from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  let navigationItems = [
    { title: 'Home', to: '/', exact: true },
    { title: 'Sign In', to: '/sign-in' },
    { title: 'Sign Up ', to: '/sign-up' },
  ];

  if (isAuth) {
    navigationItems = [
      { title: 'Home', to: '/', exact: true },
      { title: 'Todo List', to: '/todo-list' },
      { title: 'New Todo', to: '/new-todo' },
      { title: 'Options', to: '/options' },
      { title: 'Logout', to: '/logout' },
    ];
  }

  const navigationList = navigationItems.map(navItem => (
    <NavigationItem title={navItem.title} to={navItem.to} key={navItem.title} exact={navItem.exact} />
  ));

  return (
    <nav className="navigation">
      <ul>{navigationList}</ul>
    </nav>
  );
};

export default Navigation;
