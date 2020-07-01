import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer';
import SelectList from './SelectList'
import Glaph from './Glaph'
import { PibalDataInfo, DateInfo } from '../states/IPibalDataList'
import { Table } from './Table';

interface OwnProps {
	token: string
	loading: boolean
	fetchingDates: boolean
	fetchingPibalData: boolean
  scale: number
  selected?: PibalDataInfo
  dateInfoList: DateInfo[]
}
type Props = OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {
	componentDidMount() {
		console.log("componentDidMount")
		if (this.props.token) {
			if (this.props.dateInfoList.length === 0) {
				// dateInfoListがからのとき、APIを叩く
				console.log("fetch LoadDates")
				this.props.handleOnLoadDates(this.props.token)
			} else if (this.props.selected && this.props.selected.windInfoList.length === 0) {
				const selected: PibalDataInfo = this.props.selected
				this.props.handleOnLoadPiabalInfo(selected.date, selected.timePeriod, this.props.token)
			}
		}
	}

	componentDidUpdate() {
		if (this.props.token) {
			console.log("fetch LoadPibalInfo")
			if (this.props.selected && this.props.selected.windInfoList.length === 0) {
				const selected: PibalDataInfo = this.props.selected
				this.props.handleOnLoadPiabalInfo(selected.date, selected.timePeriod, this.props.token)
			}
		}

	}

	render() {
		return (
			<React.Fragment>
				<SelectList dateInfoList={this.props.dateInfoList} onChange={this.props.handleOnChangeValue}/>
				{(() => {
					if (this.props.selected) {
						return (
							<div>
								<Glaph windInfoList={this.props.selected.windInfoList}/>
								<Table selectedId={this.props.selected.id} windInfoList={this.props.selected.windInfoList}/>
							</div>
						)
					}
				})()}
				{/* <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount} /> */}

			</React.Fragment>
		)
	}
}