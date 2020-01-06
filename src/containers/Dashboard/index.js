import DashboardComponent from './components';
import { connect } from 'react-redux';
import {
  fetchTeamStanding,
} from '../../actions';

const mapStateToProps = state => {
  return {
    teamStandingData: state.teamStandingData,
  }
};
const mapDispatchToProps = {
  fetchTeamStanding,
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
export default Dashboard;