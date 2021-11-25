import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import AppHeader from "./Components/Header";
import { Layout } from 'antd';

const { Header } = Layout; 

function Practice() {
  return(
    <Layout className="mainlayout">
    <Header className="header1">
      <AppHeader />
    </Header>
  </Layout>
  );
}

export default Practice;