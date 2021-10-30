import React,{useState} from 'react';

import {Layout, Menu, Avatar, Space} from 'antd';
import {
  MessageOutlined,
  SettingOutlined,
  GlobalOutlined,
  CustomerServiceOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './App.css';
import Search from "antd/es/input/Search";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="App">
      <Layout  style={{ minHeight: '100vh' }}>
        <Sider theme='dark' collapsible collapsed={collapsed} onCollapse={()=> setCollapsed(!collapsed)}>
          <div className="logo" />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<ProfileOutlined />}>
              Profile
            </Menu.Item>
            <SubMenu key="sub1" icon={< MessageOutlined/>} title="Messages">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<GlobalOutlined />}>
              News
            </Menu.Item>
            <SubMenu key="sub2" icon={<CustomerServiceOutlined />} title="Music">
              <Menu.Item key="6">Playlists</Menu.Item>
              <Menu.Item key="8">Charts</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>



            <Space align="center">
              center
              <Search placeholder="input search text" allowClear style={{ width: 200 }} />
              <Avatar shape="square" icon={<UserOutlined />} />
            </Space>
          </Header>
          <Content style={{ margin: '16px 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
