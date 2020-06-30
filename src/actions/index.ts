import { actionCreatorFactory } from '../../node_modules/typescript-fsa';
import { ApiData } from '../reducer'
import { Dispatch } from "redux";
import { DateInfo, WindInfo } from '../states/IPibalDataList';

const actionCreator = actionCreatorFactory()

export const LoginAction = actionCreator<string>('LOGIN')

export const InputUserAction = actionCreator<string>('INPUT_USER')

export const InputPassAction = actionCreator<string>('INPUT_PASS')

export const StartLoadingAction = actionCreator('START_LOADING')

export const FinishLoadingAction = actionCreator('FINISH_LOADING')

export const StartFetchDatesAction = actionCreator('START_FETCH_DATES')

export const FinishFetchDatesAction = actionCreator('FINISH_FETCH_DATES')

export const StartFetchPibalDataAction = actionCreator('START_FETCH_PIBALDATA')

export const FinishFetchPibalDataAction = actionCreator('FINISH_FETCH_PIBALDATA')

export const EnlargeAction = actionCreator('ACTION_ENLARGE')

export const ShirinkAction = actionCreator('ACTION_SHRINK')

export const ToggleVisibleAction = actionCreator<number>('TOGGLE_VISIBLE')

export const SelectFlightAction = actionCreator<number>('SELECT_FLIGHT')

export const GetDataErrorAction = actionCreator<boolean>('GET_DATA_ERROR')

export const LoadDataAction = actionCreator<boolean>('LOAD_DATA_ERROR')

export const FetchedDataSuccessAction = actionCreator<ApiData>('FETCHED_DATA')

export const SetDateInfoListAction = actionCreator<DateInfo[]>('SET_DATES')

export const SetCurrentWindInfoListAction = actionCreator<WindInfo[]>('SET_WIND')