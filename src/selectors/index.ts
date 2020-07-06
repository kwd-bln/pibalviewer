import { AppState } from '../store'
import { DateInfo } from '../states/IPibalDataList'

export const getToken = (state: AppState): string => state.state.token

export const getUsername = (state: AppState): string => state.state.username

export const getPassword = (state: AppState): string => state.state.password

export const getDateInfoList = (state: AppState): DateInfo[] => state.state.dateInfoList