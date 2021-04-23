import React, { useState } from 'react';

import Navigation from '@src/components/Navigation/Navigation';

const HeaderBurger = props => {
  const [isActive, setIsActive] = useState(false);

  const showBurgerHandler = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <>
      <div className={`header-burger${isActive ? ' active' : ''}`} onClick={showBurgerHandler}>
        <span />
        <span />
        <span />
      </div>
      {isActive && <Navigation isMobile onClick={showBurgerHandler} />}
    </>
  );
};

export default HeaderBurger;
