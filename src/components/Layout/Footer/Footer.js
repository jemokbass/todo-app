import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <Link to="/copyright">Copyright</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
