import React from "react";
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../Dashboard';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import Icon from 'antd/es/icon';
const { Header, Content, Sider } = Layout;

const App = () => {
	return (
	<Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" style={{
				height: 32,
				background: 'rgba(255, 255, 255, 0.2)',
				margin: 16,
				textAlign: 'center',
				color: 'white',
				fontSize: 20,
			}}>
				<span>Soccer EPL</span>
			</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
				<Menu.Item key="1">
          <Icon type="dashboard" />
          <span className="nav-text">Dashboard</span>
        </Menu.Item>
				<Menu.Item key="2">
          <Icon type="appstore-o" />
          <span className="nav-text">Fixtures</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="bar-chart" />
          <span className="nav-text">Results</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="team" />
          <span className="nav-text">Team Standing</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{
				background: '#fff', padding: '0 16px', textAlign: 'right'
			}}>
				Hello Scoccer Fans!
			</Header>
      <Content style={{
				margin: '24px 16px 0',
				overflow: 'initial',
				minHeight: 'calc(100vh - 88px)',
			}}>
				<Switch>
					<Route exact path={'/'} component={Dashboard} />
				</Switch>
      </Content>
    </Layout>
  </Layout>
	)
}

export default App;