import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  fetchTeamStandingApi,
} from './apis';
import {
  fetchTeamStandingDone,
} from './actions';

function* fetchTeamStanding() {
  try {
    const result = yield call(fetchTeamStandingApi);
    const { api: { standings: [data] }} = result;
    yield put(fetchTeamStandingDone(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* watcher() {
  yield all([
    takeLatest('FETCH_TEAM_STANDING', fetchTeamStanding),
  ]);
}