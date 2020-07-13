import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { EnlargeAction, ShirinkAction, ToggleVisibleAction, SetCurrentWindInfoListAction } from './actions/index';
import { LoginAction, StartFetchDatesAction, FinishFetchDatesAction, StartFetchPibalDataAction, LogoutAction, ToggleIsToAction, ToggleGlaphIsToAction, ToggleIsKtAction } from './actions/index'
import { SetDateInfoListAction } from './actions/index';
import IState from './states/IState'

export const initialState: IState = {
	token: "",
	creatingToken: false,
	fetchingDates: false,
	fetchingPibalData: false,
	hasError: false,
	scale: 1,
	selected: undefined,
	dateInfoList: [],
	isTo: true,
	glpahIsTo: true,
	isKt: false
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


const maxScale = 3
const minScale = 0.5

export const Reducer = reducerWithInitialState(initialState)
	.case(StartFetchDatesAction, state => {
		const fetchingDates = true
		return { ...state, fetchingDates}
	})
	.case(FinishFetchDatesAction, state => {
		const fetchingDates = false
		return { ...state, fetchingDates}
	})
	.case(StartFetchPibalDataAction, state => {
		const fetchingPibalData = true
		return { ...state, fetchingPibalData }
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
	.case(SetCurrentWindInfoListAction, (state, selected) => {
		const scale = 1.0
		return { ...state, selected, scale }
	})
	// そのパイバルデータを見せる or 見せない
	.case(ToggleVisibleAction, (state, pibalIndex) => {
		const currentSelected = state.selected
		if (currentSelected) {
			const visible = !currentSelected.windInfoList[pibalIndex].visible
			const currentWindInfoList = currentSelected.windInfoList
			const windInfoList = currentWindInfoList.map((w, i) => i === pibalIndex ? { ...w, visible} : w)

			const selected = { ...currentSelected, windInfoList}
			return { ...state, selected }
		}
		return state
	})
	// login
	.case(LoginAction, (state, token) => {
		return { ...state, token } 
	})
	// logout
	.case(LogoutAction, state => {
		const token = ""
		return { ...state, token } 
	})
	.case(ToggleIsToAction, state => {
		const isTo = !state.isTo
		return { ...state, isTo }
	})
	.case(ToggleGlaphIsToAction, state => {
		const glpahIsTo = !state.glpahIsTo
		return { ...state, glpahIsTo }
	})
	.case(ToggleIsKtAction, state => {
		const isKt = !state.isKt
		return { ...state, isKt }
	})
	.build()