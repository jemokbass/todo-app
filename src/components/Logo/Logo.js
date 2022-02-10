import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '@src/assets/img/logo.svg';

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <LogoSvg />
    </Link>
  );
};

export default Logo;
