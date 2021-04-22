import React from 'react';
import { useSelector } from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const userInfo = useSelector(state => state.auth.userInfo);
  let navigationItems = [
    { title: 'Home', to: '/', exact: true },
    { title: 'Sign In', to: '/sign-in' },
    { title: 'Sign Up ', to: '/sign-up' },
  ];

  const avatar = userInfo.withAvatar
    ? { to: '/', exact: true, className: 'avatar' }
    : { title: `${userInfo.name.slice(0, 1)}`, to: '/', exact: true, className: 'avatar' };

  if (isAuth) {
    navigationItems = [
      { title: 'Home', to: '/', exact: true },
      { title: 'Todo List', to: '/todo-list' },
      { title: 'New Todo', to: '/new-todo' },
      { title: 'Options', to: '/options' },
      { title: 'Logout', to: '/logout' },
      avatar,
    ];
  }

  const navigationList = navigationItems.map(navItem => (
    <NavigationItem
      title={navItem.title}
      to={navItem.to}
      key={navItem.title}
      exact={navItem.exact}
      className={navItem.className ? navItem.className : null}
    />
  ));

  return (
    <nav className="navigation">
      <ul>{navigationList}</ul>
    </nav>
  );
};

export default Navigation;
