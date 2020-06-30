import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { EnlargeAction, ShirinkAction, ToggleVisibleAction, SelectFlightAction, SetCurrentWindInfoListAction } from './actions/index';
import { LoginAction, StartLoadingAction, FinishLoadingAction, InputPassAction, InputUserAction, StartFetchDatesAction, FinishFetchDatesAction, StartFetchPibalDataAction, FinishFetchPibalDataAction} from './actions/index'
import { SetDateInfoListAction } from './actions/index';
import IState from './states/IState'
import { PibalDataInfo } from './states/IPibalDataList'

export const initialState: IState = {
	login: false,
	token: "",
	username: "",
  password: "",
	loading: false,
	fetchingDates: false,
	fetchingPibalData: false,
	hasError: false,
	scale: 1,
	selected: undefined,
	dateInfoList: []
}

export type ApiData = {
	hours: number
  minutes: number
  winds: WindApi[]
}

type WindApi = {
  height: number,
  degree: number,
  speed: number
}


const maxScale = 2
const minScale = 0.5

export const Reducer = reducerWithInitialState(initialState)
	.case(StartLoadingAction, (state) => {
		const loading = true
		return { ...state, loading }
	})
	.case(FinishLoadingAction, (state) => {
		const loading = false
		return { ...state, loading }
	})
	.case(InputUserAction, (state, username) => {
		return { ...state, username }
	})
	.case(InputPassAction, (state, password) => {
		return { ...state, password }
	})
	.case(StartFetchDatesAction, state => {
		console.log("startFetchDatesAction")
		const fetchingDates = true
		return { ...state, fetchingDates}
	})
	.case(FinishFetchDatesAction, state => {
		console.log("FinishFetchDatesAction")
		const fetchingDates = false
		return { ...state, fetchingDates}
	})
	.case(StartFetchPibalDataAction, state => {
		const fetchingPibalData = true
		return { ...state, fetchingPibalData }
	})
	.case(FinishFetchPibalDataAction, state => {
		const fetchingPibalData = false
		return { ...state, fetchingPibalData}
	})
	// 拡大する
	.case(EnlargeAction, (state) => {
		let scale = Math.min(state.scale + 0.1, maxScale)
		return { ...state, scale }
	})
	// 縮小する
	.case(ShirinkAction, (state) => {
		let scale = Math.max(state.scale - 0.1, minScale)
		return { ...state, scale }
	})
	// Datesを取ってきてstateに入れる。
	.case(SetDateInfoListAction, (state, dateInfoList) => {
		return { ...state, dateInfoList }
	})
	// pibalDateを取ってきてcurrentに入れる。
	.case(SetCurrentWindInfoListAction, (state, windInfoList) => {
		if (state.selected) {
			const selected = { ...state.selected, windInfoList}
			return { ...state, selected }
		}
		return state
	})
	// どのフライトのパイバルデータを見せるか選択
	.case(SelectFlightAction, (state, id) => {
		const selectedDateInfo = state.dateInfoList.find(d => d.id === id)
		if (selectedDateInfo) {
			const selected: PibalDataInfo = {
				id: id,
				date: selectedDateInfo.date,
				timePeriod: selectedDateInfo.timePeriod,
				windInfoList: []
			}
			return { ...state, selected }
		} else {
			return { ...state }
		}
	})
	// そのパイバルデータを見せる or 見せない
	.case(ToggleVisibleAction, (state, pibalIndex) => {
		let selected = state.selected
		if (selected) {
			let currentVisible = selected.windInfoList[pibalIndex].visible
			selected.windInfoList[pibalIndex].visible = !currentVisible
			return { ...state, selected}
		}
		return state
	})
	// login
	.case(LoginAction, (state, token) => {
		const login = true
		return { ...state, login, token } 
	})
	.build()