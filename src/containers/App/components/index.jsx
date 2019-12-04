import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import Icon from 'antd/es/icon';
import Dashboard from '../../Dashboard';
import TeamStanding from '../../TeamStanding';
import Fixtures from '../../Fixtures';
import Results from '../../Results';

const { Header, Content, Sider } = Layout;

const App = ({ location: { pathname } }) => {
	const [, menuKey] = pathname.split('/');
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
      <Menu theme="dark" mode="inline" selectedKeys={[menuKey || 'dashboard']}>
				<Menu.Item key="dashboard">
					<Link to="/">
						<Icon type="dashboard" />
						<span className="nav-text">Dashboard</span>
					</Link>
        </Menu.Item>
				<Menu.Item key="fixtures">
					<Link to="/fixtures">
						<Icon type="appstore-o" />
						<span className="nav-text">Fixtures</span>
					</Link>
        </Menu.Item>
        <Menu.Item key="results">
					<Link to="/results">
						<Icon type="bar-chart" />
						<span className="nav-text">Results</span>
					</Link>
        </Menu.Item>
        <Menu.Item key="team-standing">
					<Link to="/team-standing">
						<Icon type="team" />
						<span className="nav-text">Team Standing</span>
					</Link>
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
					<Route exact path={'/team-standing'} component={TeamStanding} />
					<Route exact path={'/results'} component={Results} />
					<Route exact path={'/fixtures'} component={Fixtures} />
				</Switch>
      </Content>
    </Layout>
  </Layout>
	)
}

export default App;