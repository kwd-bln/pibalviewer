import IPibalDataList from './IPibalDataList';

export default interface IState {
  login: boolean
  token: string
  username: string
  password: string
  loading: boolean
  hasError: boolean
  scale: number
  selected: number
  pibalDataList: IPibalDataList
}