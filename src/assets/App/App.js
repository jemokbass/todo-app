import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '@src/store/actions/authActions';

import Routes from './Routes';
import Layout from '@src/components/Layout/Layout';
import Loader from '@src/components/Loader/Loader';
import { getLanguage } from '@src/store/actions/optionsActions';
import { LanguageContext } from '@src/shared/context';
import * as resources from '@src/assets/localize/resources.json';

const App = props => {
  const isGetResponse = useSelector(state => state.auth.getResponse);
  const error = useSelector(state => state.auth.authError);
  const language = useSelector(state => state.options.language);
  const dispatch = useDispatch();
  const isComplete = useSelector(state => state.options.isComplete);
  const autoSignIn = useCallback(() => dispatch(checkLogin()), [dispatch]);
  const getCurrentLanguage = () => dispatch(getLanguage());

  const currentLanguage = () => {
    if (language === 'en') return resources.en;
    if (language === 'ru') return resources.ru;
  };

  useEffect(() => {
    getCurrentLanguage();
  });

  useEffect(() => {
    autoSignIn();

    if (isComplete) {
      autoSignIn();
    }
  }, [autoSignIn, isComplete, language]);

  let app = <Loader className="main-loader" />;

  if (isGetResponse || !error) {
    app = (
      <Layout>
        <Routes />
      </Layout>
    );
  }

  if (error) {
    app = <p className="error">{error.message}</p>;
  }

  return <LanguageContext.Provider value={currentLanguage()}>{app}</LanguageContext.Provider>;
};

export default App;
