import { actionCreatorFactory } from '../node_modules/typescript-fsa';
import { ApiData } from './reducer'
import { Dispatch } from "redux";

const actionCreator = actionCreatorFactory()

export const LoginAction = actionCreator('LOGIN')

export const EnlargeAction = actionCreator('ACTION_ENLARGE')

export const ShirinkAction = actionCreator('ACTION_SHRINK')

export const ToggleVisibleAction = actionCreator<number>('TOGGLE_VISIBLE')

export const SelectFlightAction = actionCreator<number>('SELECT_FLIGHT')

export const GetDataErrorAction = actionCreator<boolean>('GET_DATA_ERROR')

export const LoadDataAction = actionCreator<boolean>('LOAD_DATA_ERROR')

export const FetchedDataSuccessAction = actionCreator<ApiData>('FETCHED_DATA')

