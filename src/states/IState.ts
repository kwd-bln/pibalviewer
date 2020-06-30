import { DateInfo, PibalDataInfo } from './IPibalDataList';

export default interface IState {
  login: boolean
  token: string
  username: string
  password: string
  loading: boolean
  fetchingDates: boolean
  fetchingPibalData: boolean
  hasError: boolean
  scale: number
  selected?: PibalDataInfo
  dateInfoList: DateInfo[]
}