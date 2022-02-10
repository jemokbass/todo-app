import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '@src/shared/context';

const Footer = () => {
  const resources = useContext(LanguageContext);

  return (
    <footer className="footer">
      <ul>
        <li>
          <Link to="/copyright">{resources.footer_copy}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
