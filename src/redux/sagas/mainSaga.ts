import { all, put, takeEvery } from 'redux-saga/effects'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу увеличения счётчика
function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// обратите внимание, как мы экспортируем rootSaga
// единая точка входа для запуска всех Саг одновременно
export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}