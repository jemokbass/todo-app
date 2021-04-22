import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }) => {
  const themeSelector = useSelector(state => state.auth.userInfo);
  let themeClass = themeSelector.theme.value;

  if (!themeSelector) {
    themeClass = 'standard';
  }

  return (
    <div className={`layout ${themeClass}`}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
