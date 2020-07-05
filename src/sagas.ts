import { push } from 'react-router-redux'
import { take, put, fork, call, select } from 'redux-saga/effects'
import { authorize, fetchDetes, fetchWindInfo } from './common/api'
import { REQUEST_LOGIN, START_CREATE_TOKEN, FINISH_CREATE_TOKEN } from './actions'
import { getToken, getUsername, getPassword } from './selectors'

function* authSaga() {
  while (true) {
    yield take(START_CREATE_TOKEN)
    
    const username = yield select(getUsername)
    const password = yield select(getPassword)

    const { token, error } = yield call(authorize, username, password)

    console.log(`action${START_CREATE_TOKEN}, user: ${username}, pass: ${password}, token: ${token}, error: ${error}`)

    if (!token && error) {
      yield put({ type: FINISH_CREATE_TOKEN })
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
    console.log(FINISH_CREATE_TOKEN, 'aaaa')

    // ページを移動する
    console.log()
    yield put(push('/'))
  }
}

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(pageSaga);
}