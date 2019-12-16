import React, { Fragment } from "react";
import Table from 'antd/es/table';

const columns = [
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Name',
    dataIndex: 'name',
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
    title: 'Won',
    dataIndex: 'won',
	},
	{
    title: 'Draw',
    dataIndex: 'draw',
	},
	{
    title: 'Lost',
    dataIndex: 'lost',
	},
	{
    title: 'Goal For',
    dataIndex: 'goalFor',
  },
  {
    title: 'Goal Difference',
    dataIndex: 'goalDifference',
	},
	{
    title: 'Goal Against',
    dataIndex: 'goalAgainst',
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
		name: 'Manchester City',
    shortName: 'MCI',
		played: 22,
		won: 0,
		lost: 0,
		draw: 0,
		goalFor: 0,
		goalAgainst: 0,
    goalDifference: 23,
    points: 21,
  },
  {
    key: '2',
		position: 2,
		name: 'Chelsea',
    shortName: 'CHE',
		played: 22,
		won: 0,
		lost: 0,
		draw: 0,
		goalFor: 0,
		goalAgainst: 0,
    goalDifference: 23,
    points: 21,
  },
  {
    key: '3',
		position: 3,
		name: 'Tottenham Hotspur',
    shortName: 'TOT',
		played: 22,
		won: 0,
		lost: 0,
		draw: 0,
		goalFor: 0,
		goalAgainst: 0,
    goalDifference: 23,
    points: 21,
  },
];
const TeamStanding = () => {
  return (
    <Fragment>
			<h2>EPL Team Standings</h2>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
				pagination={false}
				style={{ background: 'white' }}
      />
    </Fragment>
    
  );
}

export default TeamStanding;

