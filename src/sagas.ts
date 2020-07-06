import { push } from 'react-router-redux'
import { take, put, fork, call, select, takeEvery } from 'redux-saga/effects'
import { authorize, fetchDetes, fetchWindInfo } from './common/api'
import { REQUEST_LOGIN, REQUEST_LOGOUT, START_CREATE_TOKEN, FINISH_CREATE_TOKEN, START_FETCH_DATES, FINISH_FETCH_DATES, SET_DATES, SELECT_FLIGHT, SET_WIND } from './actions'
import { getToken, getUsername, getPassword, getDateInfoList } from './selectors'
import { DateInfo, PibalDataInfo } from './states/IPibalDataList'

function* authSaga() {
  while (true) {
    yield take(START_CREATE_TOKEN)
    
    const username = yield select(getUsername)
    const password = yield select(getPassword)

    const { token, error } = yield call(authorize, username, password)

    console.log(`action${START_CREATE_TOKEN}, user: ${username}, pass: ${password}, token: ${token}, error: ${error}`)

    if (!token && error) {
      yield put({ type: FINISH_CREATE_TOKEN })
      localStorage.clear()
      yield put({ type: REQUEST_LOGOUT })
      continue; // 認証に失敗したらリトライに備えて最初に戻る
    }

    if (token) {
      yield put({ type: REQUEST_LOGIN, payload: token })
      yield put({ type: FINISH_CREATE_TOKEN });
    }
  }
}

function* pageSaga() {
  while (true) {
    // ログイン成功するまでずっと待つ
    yield take(FINISH_CREATE_TOKEN)
    // ページを移動する
    yield put(push('/'))
  }
}

function* fetchDatesSaga() {
  const token = yield select(getToken)
  const { dateList, error } = yield call(fetchDetes, token)

  console.log(`action: ${START_FETCH_DATES}, dateList: ${dateList}, error: ${error}`)

  if (!dateList && error) {
    yield put({ type: FINISH_FETCH_DATES })
    localStorage.clear()
    yield put({ type: REQUEST_LOGOUT })
    yield put(push('/'))
  }

  if (dateList) {
    yield put({ type: SET_DATES, payload: dateList })
    yield put({ type: FINISH_FETCH_DATES })
    yield put({ type: SELECT_FLIGHT, payload: 0 })
  }
}

function* selectFlightSaga() {
  while(true) {
    const action = yield take(SELECT_FLIGHT)
    const id = action.payload
    const token = yield select(getToken)
    const dateInfoList = yield select(getDateInfoList)
    const dateInfo: DateInfo = dateInfoList[id]

    const { windInfoList, error } = yield call(fetchWindInfo, token, dateInfo.date, dateInfo.timePeriod)

    if (!windInfoList && error) {
      localStorage.clear()
      yield put({ type: REQUEST_LOGOUT })
      yield put(push('/'))
    }

    if (windInfoList) {
      const pibalDataInfo: PibalDataInfo = {
        id: id,
        date: dateInfo.date,
        timePeriod: dateInfo.timePeriod,
        windInfoList: windInfoList
      } 
      console.log(windInfoList)
      yield put({type: SET_WIND, payload: pibalDataInfo })
    }
  }
}

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(pageSaga);
  yield takeEvery(START_FETCH_DATES, fetchDatesSaga)
  yield fork(selectFlightSaga)
}