import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

import api from '../api/api';

function* fetchTasks() {
  const json = yield axios.get(api)
                     .then(res => res.data);
  yield put({ type: "TASKS_LOADED", json: json });
}

function* actionWatcher() {
  yield takeLatest('GET_TASKS', fetchTasks);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}