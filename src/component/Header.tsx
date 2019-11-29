import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import logo from '../assets/image/logo.svg';

const { Header } = Layout;

const Nav: React.FC = () => {
  return(
    <Header>
      <div className="logo">
        <img src={logo} className="pp-logo" alt="logo" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to="/">Index</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default Nav;