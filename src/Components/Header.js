import React from "react";
import { Menu, Row, Col,Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Link }  from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
function AppHeader(){
     
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="reacthooks/usestate">UseState</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="reacthooks/useeffect">UseEffect</Link>
      </Menu.Item>
    </Menu>
  )
    return(
      <div className="container-fluid">
          <div className="header">
            <Row>
              <Col md={4}>
              <div className="logo">
               <a href = "http://www.google.com"><h3>  React practice<GlobalOutlined /></h3>
               </a>
               </div>
              </Col>
              <Col md={20} >
               <Menu mode="horizontal" defaultSelectedKeys={['home']} className="col2">
                 <Menu.Item key="storage"><Link to="storages/storage">storages</Link></Menu.Item>
                 <Menu.Item key="home"><Link to="practice">practice</Link></Menu.Item>
                 <Menu.Item key="country"><Link to="registerform">RegisterForm antD</Link></Menu.Item>
                 <Menu.Item key="states">
                 <Dropdown overlay={menu} trigger={['click']}>
                       <h4>React Hooks <DownOutlined /></h4>
                </Dropdown>
                 </Menu.Item>
                 <Menu.Item key="Address"> <Link to="parent">parent prop</Link></Menu.Item>
               </Menu>
               </Col>
            </Row>
           </div>
      </div>
    );
}

export default AppHeader;