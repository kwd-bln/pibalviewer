import { actionCreatorFactory } from '../../node_modules/typescript-fsa';
import { ApiData } from '../reducer'
import { DateInfo, PibalDataInfo } from '../states/IPibalDataList'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const START_CREATE_TOKEN = 'START_CREATE_TOKEN'
export const FINISH_CREATE_TOKEN = 'FINISH_CREATE_TOKEN'
export const START_FETCH_DATES = 'START_FETCH_DATES'
export const FINISH_FETCH_DATES = 'FINISH_FETCH_DATES'
export const SET_DATES = 'SET_DATES'
export const SELECT_FLIGHT = 'SELECT_FLIGHT'
export const SET_WIND = 'SET_WIND'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'

const actionCreator = actionCreatorFactory()

export const LoginAction = actionCreator<string>(REQUEST_LOGIN)

export const LogoutAction = actionCreator(REQUEST_LOGOUT)

export const InputUserAction = actionCreator<string>('INPUT_USER')

export const InputPassAction = actionCreator<string>('INPUT_PASS')

export const StartCreateTokenAction = actionCreator<{username: string, password: string}>('START_CREATE_TOKEN')

export const FinishCreateTokenAction = actionCreator('FINISH_CREATE_TOKEN')

export const StartFetchDatesAction = actionCreator(START_FETCH_DATES)

export const FinishFetchDatesAction = actionCreator(FINISH_FETCH_DATES)

export const SetDateInfoListAction = actionCreator<DateInfo[]>(SET_DATES)

export const StartFetchPibalDataAction = actionCreator('START_FETCH_PIBALDATA')

export const EnlargeAction = actionCreator('ACTION_ENLARGE')

export const ShirinkAction = actionCreator('ACTION_SHRINK')

export const ToggleVisibleAction = actionCreator<number>('TOGGLE_VISIBLE')

export const SelectFlightAction = actionCreator<number>('SELECT_FLIGHT')

export const GetDataErrorAction = actionCreator<boolean>('GET_DATA_ERROR')

export const LoadDataAction = actionCreator<boolean>('LOAD_DATA_ERROR')

export const FetchedDataSuccessAction = actionCreator<ApiData>('FETCHED_DATA')

export const SetCurrentWindInfoListAction = actionCreator<PibalDataInfo>(SET_WIND)

export const ToggleIsToAction = actionCreator('TOGGLE_ISTO')

export const ToggleGlaphIsToAction = actionCreator('TOGGLE_GLAPHISTO')

export const ToggleIsKtAction = actionCreator('TOGGLE_ISKT')

export const SelectTimeAction = actionCreator<number>('SELECT_TIME')