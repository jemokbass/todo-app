import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import { LanguageContext } from '@src/shared/context';
import ReactSelect from 'react-select';
import { changeLanguage } from '@src/store/actions/optionsActions';

const Navigation = props => {
  const { isMobile, onClick } = props;
  const isAuth = useSelector(state => state.auth.isAuth);
  const error = useSelector(state => state.auth.error);
  const userInfo = useSelector(state => state.auth.userInfo);
  const avatarUrl = useSelector(state => state.auth.avatar);
  const resources = useContext(LanguageContext);
  let navigationItems = [
    { title: resources.navigation_home, to: '/', exact: true },
    { title: resources.navigation_sign_in, to: '/sign-in' },
    { title: resources.navigation_sign_up, to: '/sign-up' },
  ];
  const options = [
    { value: 'en', label: 'En' },
    { value: 'ru', label: 'Ru' },
  ];
  const dispatch = useDispatch();
  const changeLanguageSetter = language => dispatch(changeLanguage(language));

  if (isAuth && !error) {
    let avatar = { title: '', to: '' };

    if (userInfo?.name) {
      avatar = { title: `${userInfo?.name.slice(0, 1)}`, to: '/', exact: true, className: 'avatar' };
    }

    if (userInfo?.avatar) {
      avatar = { to: '/', exact: true, className: 'avatar', title: <img src={avatarUrl} alt="avatar" /> };
    }

    navigationItems = [
      { title: resources.navigation_home, to: '/', exact: true },
      { title: resources.navigation_todo_list, to: '/todo-list' },
      { title: resources.navigation_new_todo, to: '/new-todo' },
      { title: resources.navigation_options, to: '/options' },
      { title: resources.navigation_logout, to: '/logout' },
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

  const changeLanguageHandler = value => {
    changeLanguageSetter(value.value);
  };

  return (
    <div className="nav">
      <ReactSelect
        options={options}
        onChange={changeLanguageHandler}
        placeholder={resources.navigation_lang_placeholder}
      />
      <nav className={`navigation${isMobile ? ' mobile' : ''}`} onClick={onClick}>
        <ul>{navigationList}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
