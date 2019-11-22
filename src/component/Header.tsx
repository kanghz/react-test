import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return(
    <header>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;