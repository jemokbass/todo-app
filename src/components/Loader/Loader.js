import React from 'react';

import { ReactComponent as OutCircle } from '@src/assets/img/loader/out-circle.svg';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__inner">
        <OutCircle className="loader__out" />
      </div>
    </div>
  );
};

export default Loader;
