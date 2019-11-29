import React from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import { Layout } from 'antd';
import Router from '../router/Router';

const { Footer, Content } = Layout;

const App: React.FC = () => {
  return(
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <Router></Router>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App;
