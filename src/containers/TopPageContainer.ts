import { connect } from "react-redux";
import { Dispatch } from "redux";
import { EnlargeAction, ShirinkAction, ToggleVisibleAction, SelectFlightAction } from "../actions/index";
import { StartFetchDatesAction, FinishFetchDatesAction, StartFetchPibalDataAction, FinishFetchPibalDataAction, SetDateInfoListAction, SetCurrentWindInfoListAction } from "../actions/index";
import { TopPageForm } from "../components/TopPageForm";
import { AppState } from "../store"
import { DateInfo, PibalDataInfo, WindInfo, Wind } from "./../states/IPibalDataList"

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
	handleOnLoadDates(token: string): void
	handleOnLoadPiabalInfo(date: Date, timePeriod: string, token: string): void
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
		handleOnLoadDates: (token: string) => { fetchDetes(token)(dispatch) },
		handleOnLoadPiabalInfo: (date: Date, timePeriod: string, token: string) => { fetchWindInfo(date, timePeriod, token)(dispatch) }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm)

export const fetchDetes = (token: string): Function => {
	return (dispatch: Dispatch): void => {
		dispatch(StartFetchDatesAction());
		fetch('https://oval-silicon-280513.an.r.appspot.com/api/v1/dates', {
			headers: { 'x-access-token': token }
		}).then((res) => res.json())
			.then((obj) => {
				const apiDateList: ApiDateAndTiming[] = obj.data
				let mappedList: DateInfo[] = apiDateList.map((apiDate, index) => {
          return {
						id: index,
						date: getDateFrom(apiDate.date),
						timePeriod: apiDate.timing
					}
				})
				mappedList.sort((a, b) => a.date.getTime() - b.date.getTime())
				dispatch(SetDateInfoListAction(mappedList))
				dispatch(FinishFetchDatesAction())
				if (mappedList.length !== 0) {
					dispatch(SelectFlightAction(0))
				}
			})
			.catch((err) => {
				console.log("error in fetchDetes:", err)
				dispatch(FinishFetchDatesAction())
			});
	}
}

export const fetchWindInfo = (date: Date, timePeriod: string, token: string) => {
	return (dispatch: Dispatch): void => {
		getPibalInfo(dispatch, date, timePeriod, token)
	}
}

function getPibalInfo(dispatch: Dispatch, date: Date, timePeriod: string, token: string) {
	const yyyymmdd = getYYYYMMDD(date)
	dispatch(StartFetchPibalDataAction())
	fetch(`https://oval-silicon-280513.an.r.appspot.com/api/v1/${yyyymmdd}/${timePeriod}`, {
		headers: { 'x-access-token': token }
	})
	.then(res => res.json())
	.then(obj => {
		if (obj.data.length) {
			const windInfoList: WindInfo[] = []
			const infos: ApiData[] = obj.data[0].infos
			infos.forEach(info => {
				const hours = info.hours
				const minutes = info.minutes
				const winds: Wind[] = info.winds.map(w => {
					return {
						alt: w.height,
						deg: w.degree,
						spd: w.speed
					}
				})
				windInfoList.push({
					hours: hours,
					minutes: minutes,
					winds: winds,
					visible: true
				})
			})
			dispatch(SetCurrentWindInfoListAction(windInfoList))
			dispatch(FinishFetchPibalDataAction())
		}
	})
	.catch(err => {
		console.log("error in getPibalInfo:", err)
		dispatch(FinishFetchPibalDataAction())
	})
}


function getDateFrom(yyyymmdd: string): Date {
	const year = Number(yyyymmdd.slice(0, 4))
	const month = Number(yyyymmdd.slice(4, 6))
	const day = Number(yyyymmdd.slice(6))
	return new Date(year, month, day)
}

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