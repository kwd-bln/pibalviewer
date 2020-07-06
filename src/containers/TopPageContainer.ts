import { connect } from "react-redux";
import { Dispatch } from "redux";
import { EnlargeAction, ShirinkAction, ToggleVisibleAction, SelectFlightAction } from "../actions/index";
import { StartFetchDatesAction, FinishFetchDatesAction, StartFetchPibalDataAction, FinishFetchPibalDataAction, SetDateInfoListAction, SetCurrentWindInfoListAction } from "../actions/index";
import { TopPageForm } from "../components/TopPageForm";
import { AppState } from "../store"
import { DateInfo, WindInfo, Wind } from "./../states/IPibalDataList"

type WindApi = {
	height: number,
	degree: number,
	speed: number
}

type ApiData = {
	hours: number
	minutes: number
	winds: WindApi[]
}

type ApiDateAndTiming = {
	date: string
	timing: string
}


export interface TopPageHandler {
	handleClickEnlargeButton(): void
	handleClickShrinkButton(): void
	handleOnChangeValue(value: number): void
	handleOnSelectToggleButton(value: number): void
	handleOnLoadDates(): void
}

const mapStateToProps = (appState: AppState) => {
	return {
		token: appState.state.token,
		fetchingDates: appState.state.fetchingDates,
		fetchingPibalData: appState.state.fetchingPibalData,
		scale: appState.state.scale,
		selected: appState.state.selected,
		dateInfoList: appState.state.dateInfoList
	}
}

const mapDispatchToProps = (dispatch: Dispatch): TopPageHandler => {
	return {
		handleClickEnlargeButton: () => { dispatch(EnlargeAction()) },
		handleClickShrinkButton: () => { dispatch(ShirinkAction()) },
		handleOnChangeValue: (value: number) => { dispatch(SelectFlightAction(value)) },
		handleOnSelectToggleButton: (value: number) => { dispatch(ToggleVisibleAction(value)) },
		handleOnLoadDates: () => { dispatch(StartFetchDatesAction()) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm)
export function getYYYYMMDD(date: Date):string {
	const y = date.getFullYear().toString()
	const m = ("00" + date.getMonth()).slice(-2)
	const d = ("00" + date.getDate()).slice(-2)
  const result = y + m + d
  return result
}

export function getYYYY_MM_DD(date: Date):string {
	const y = date.getFullYear().toString()
	const m = ("00" + date.getMonth()).slice(-2)
	const d = ("00" + date.getDate()).slice(-2)
  const result = y + "/" + m + "/" + d
  return result
}