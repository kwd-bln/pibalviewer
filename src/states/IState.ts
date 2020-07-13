import { DateInfo, PibalDataInfo } from './IPibalDataList';

export default interface IState {
  token: string
  creatingToken: boolean
  fetchingDates: boolean
  fetchingPibalData: boolean
  hasError: boolean
  scale: number
  selected?: PibalDataInfo
  dateInfoList: DateInfo[]
  isTo: boolean
  glpahIsTo: boolean
  isKt: boolean
}