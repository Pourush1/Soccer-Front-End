import React, { Fragment } from "react";
import Table from 'antd/es/table';
import Button from 'antd/es/button';

const columns = [
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Short Name',
    dataIndex: 'shortName',
  },
  {
    title: 'Played',
    dataIndex: 'played',
  },
  {
    title: 'Goal Difference',
    dataIndex: 'goalDifference',
  },
  {
    title: 'Points',
    dataIndex: 'points',
  },
];
const data = [
  {
    key: '1',
    position: 1,
    shortName: 'MCI',
    played: 22,
    goalDifference: 23,
    points: 21,
  },
  {
    key: '2',
    position: 2,
    shortName: 'CHE',
    played: 22,
    goalDifference: 23,
    points: 21,
  },
  {
    key: '3',
    position: 3,
    shortName: 'TOT',
    played: 22,
    goalDifference: 23,
    points: 21,
  },
];
const TeamStanding = () => {
  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
      />
      <Button style={{ marginTop: 16 }} type="primary">View More</Button>
    </Fragment>
    
  );
}

export default TeamStanding;

