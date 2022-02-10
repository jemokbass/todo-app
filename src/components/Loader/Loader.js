import React from 'react';
import PropTypes from 'prop-types'

import { ReactComponent as OutCircle } from '@src/assets/img/loader/out-circle.svg';

const Loader = (props) => {
  const {className} = props;

  return (
    <div className={`loader ${className}`}>
      <div className="loader__inner">
        <OutCircle className="loader__out" />
      </div>
    </div>
  );
};

Loader.defaultProps = {
  className: ''
}

Loader.propTypes = {
  className: PropTypes.string
}

export default Loader;
