import React from 'react';

import Logo from '@src/components/Logo/Logo';
import Navigation from '@src/components/Navigation/Navigation';
import HeaderBurger from './HeaderBurger/HeaderBurger';

const Header = () => {
  const navigation = window.innerWidth < 768 ? <HeaderBurger /> : <Navigation />;
  return (
    <header className="header">
      <Logo />
      {navigation}
    </header>
  );
};

export default Header;
