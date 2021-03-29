import React from 'react';

import Logo from '@src/components/Logo/Logo';
import Navigation from '@src/components/Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
