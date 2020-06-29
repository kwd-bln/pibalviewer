import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { EnlargeAction, ShirinkAction, ToggleVisibleAction, SelectFlightAction } from './actions/index';
import { LoginAction, StartLoadingAction, FinishLoadingAction, InputPassAction, InputUserAction, GetDataErrorAction, LoadDataAction, FetchedDataSuccessAction} from './actions/index'

import IState from './states/IState'

export const initialState: IState = {
	login: false,
	token: "",
	username: "",
  password: "",
	loading: false,
	hasError: false,
	scale: 1,
	selected: 0,
	pibalDataList: { list: [] }
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
	// そのパイバルデータを見せる or 見せない
	.case(ToggleVisibleAction, (state, pibalIndex) => {
		let currentState = state
		currentState.pibalDataList.list[currentState.selected].infoList[pibalIndex].visible = false
		return currentState
	})
	// どのフライトのパイバルデータを見せるか選択
	.case(SelectFlightAction, (state, selected) => {
		return { ...state, selected }
	})
	// login
	.case(LoginAction, (state, token) => {
		const login = true
		return { ...state, login, token } 
	})
	.build()