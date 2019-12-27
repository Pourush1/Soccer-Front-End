export const fetchTeamStanding = () => ({
  type: 'FETCH_TEAM_STANDING',
});

export const fetchTeamStandingDone = data => ({
  type: 'FETCH_TEAM_STANDING_DONE',
  data,
});