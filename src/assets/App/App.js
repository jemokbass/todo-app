import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '@src/store/actions/authActions';

import Routes from './Routes';
import Layout from '@src/components/Layout/Layout';
import Loader from '@src/components/Loader/Loader';

const App = props => {
  const isGetResponse = useSelector(state => state.auth.getResponse);
  const dispatch = useDispatch();
  const isComplete = useSelector(state => state.options.isComplete);
  const autoSignIn = useCallback(() => dispatch(checkLogin()), [dispatch]);

  useEffect(() => {
    autoSignIn();

    if (isComplete) {
      autoSignIn();
    }
  }, [autoSignIn, isComplete]);

  return isGetResponse ? (
    <Loader className="main-loader" />
  ) : (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
