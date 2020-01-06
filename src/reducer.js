let initialState = {
  teamStandingData: []
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAM_STANDING_DONE':
      return {
        ...state, teamStandingData: action.data,
      };
    default:
      return state
  }
};
export default appReducer;