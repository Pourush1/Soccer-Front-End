import React from "react";
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Card from 'antd/es/card';
import TeamStandingSummary from './Summary/TeamStanding';
import ResultsSummary from './Summary/Results';

const Dashboard = () => {
	return (
		<div>
			<h2>Dashboard</h2>
			<Row gutter={16}>
				<Col span={12}>
					<Card title="Team Standing">
						<TeamStandingSummary />
					</Card>
				</Col>
				<Col span={12}>
					<Card title="Results">
						<ResultsSummary />
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard;