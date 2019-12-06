import React, { Fragment } from "react";
import Table from 'antd/es/table';
import moment from 'moment';

const columns = [
  {
    title: 'Veneue',
    dataIndex: 'veneue',
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Team 1',
    dataIndex: 'team1',
	},
	{
    title: 'Team 2',
    dataIndex: 'team2',
  },
];
const data = [
  {
    key: '1',
    veneue: 'Liverpool',
    time: '06:30',
    team1: 'Arsenal',
    team2: 'West Bron',
  },
  {
    key: '2',
    veneue: 'Burnley',
    time: '11:30',
    team1: 'Brighton',
    team2: 'Newcastle',
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
const Fixtures = () => {
  return (
    <Fragment>
			<h2>Fixtures</h2>
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

export default Fixtures;

