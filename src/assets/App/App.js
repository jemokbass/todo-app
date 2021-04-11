import React, { useCallback, useEffect } from 'react';

import Layout from '@src/components/Layout/Layout';
import Routes from './Routes';
import { useDispatch } from 'react-redux';
import { checkLogin } from '@src/store/actions/authActions';

const App = props => {
  const dispatch = useDispatch();
  const autoSignIn = useCallback(() => dispatch(checkLogin()), [dispatch]);

  useEffect(() => {
    autoSignIn();
  }, [autoSignIn]);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
