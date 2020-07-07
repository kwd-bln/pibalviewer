import { AppState } from '../store'
import { DateInfo } from '../states/IPibalDataList'

export const getToken = (state: AppState): string => state.state.token

export const getDateInfoList = (state: AppState): DateInfo[] => state.state.dateInfoList