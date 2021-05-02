import React from 'react';
import { useSelector } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = props => {
  const { isMobile, onClick } = props;
  const isAuth = useSelector(state => state.auth.isAuth);
  const error = useSelector(state => state.auth.error);
  const userInfo = useSelector(state => state.auth.userInfo);
  const avatarUrl = useSelector(state => state.auth.avatar);
  let navigationItems = [
    { title: 'Home', to: '/', exact: true },
    { title: 'Sign In', to: '/sign-in' },
    { title: 'Sign Up ', to: '/sign-up' },
  ];

  if (isAuth && !error) {
    let avatar = { title: '', to: '' };

    if (userInfo?.name) {
      avatar = { title: `${userInfo?.name.slice(0, 1)}`, to: '/', exact: true, className: 'avatar' };
    }

    if (userInfo?.avatar) {
      avatar = { to: '/', exact: true, className: 'avatar', title: <img src={avatarUrl} alt="avatar" /> };
    }

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
    <nav className={`navigation${isMobile ? ' mobile' : ''}`} onClick={onClick}>
      <ul>{navigationList}</ul>
    </nav>
  );
};

export default Navigation;
