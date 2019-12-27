import React, { Fragment, useEffect } from "react";
import Table from 'antd/es/table';
import Button from 'antd/es/button';

const columns = [
  {
    title: 'Position',
    dataIndex: 'rank',
  },
  {
    title: 'Team Name',
    dataIndex: 'teamName',
  },
  {
    title: 'Played',
    dataIndex: 'all',
    render: data => data.matchsPlayed,
  },
  {
    title: 'Goal Difference',
    dataIndex: 'goalsDiff',
  },
  {
    title: 'Points',
    dataIndex: 'points',
  },
];

const TeamStanding = ({
  teamStandingData,
  fetchTeamStanding,
}) => {
  useEffect(() => { fetchTeamStanding() }, []); // eslint-disable-line
  const data = teamStandingData.slice(0, 5);
  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
        rowKey="team_id"
      />
      <Button style={{ marginTop: 16 }} type="primary">View More</Button>
    </Fragment>

  );
}

export default TeamStanding;

