import React, { Fragment } from "react";
import Table from 'antd/es/table';
import moment from 'moment';
import Button from "antd/es/button";

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
    title: 'Team 2',
    dataIndex: 'team2',
  },
  {
    title: 'Goals 2',
    dataIndex: 'goals2',
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
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
        showHeader={false}
        title={() => <DateTitle date="02-12-2018" />}
      />
      <Button style={{ marginTop: 16 }} type="primary">View More</Button>
    </Fragment>

  );
}

export default Results;

