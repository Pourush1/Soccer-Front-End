import React, { Fragment } from "react";
import Table from 'antd/es/table';
import moment from 'moment';

const columns = [
  {
    title: 'Team 1',
    dataIndex: 'team1',
  },
  {
    title: 'Goals 1',
    dataIndex: 'goals1',
  },
  {
		title: 'Goals 2',
		className: 'column-right-align-text',
    dataIndex: 'goals2',
	},
	{
		title: 'Team 2',
		className: 'column-right-align-text',
    dataIndex: 'team2',
  },
];
const data = [
  {
    key: '1',
    team1: 'Arsenal',
    goals1: 2,
    team2: 'West Bron',
    goals2: 0,
  },
  {
    key: '2',
    team1: 'Brighton',
    goals1: 1,
    team2: 'Newcastle',
    goals2: 1,
  },
];
const DateTitle = ({ date }) => (
  <span style={{
    paddingLeft: 48,
    opacity: 0.8,
  }}>
    {moment(date, 'MM-DD-YYYY').format('dddd DD MMMM YYYY')}
  </span>
)
const Results = () => {
  return (
    <Fragment>
			<h2>Results</h2>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
        showHeader={false}
				title={() => <DateTitle date="02-12-2018"/>}
				style={{ background: 'white' }}
      />
    </Fragment>

  );
}

export default Results;

