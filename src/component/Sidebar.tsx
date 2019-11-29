import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Sidebar: React.FC = () => {

    return(
      <Sider width={256}>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
      </Sider>
    )
}

export default Sidebar;