import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { logout as logoutAction } from '@src/store/actions/authActions';

const Logout = () => {
  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/" />;
};

export default Logout;
