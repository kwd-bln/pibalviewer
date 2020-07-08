import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer';
import SelectList from './SelectList'
import Glaph from './Glaph'
import { PibalDataInfo, DateInfo } from '../states/IPibalDataList'
import { Table } from './Table';
import { Tab, Tabs, Col } from 'react-bootstrap'

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
		if (this.props.token) {
			if (this.props.dateInfoList.length === 0) {
				// dateInfoListがからのとき、APIを叩く
				console.log("fetch LoadDates")
				this.props.handleOnLoadDates()
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
							<Tabs defaultActiveKey="glaph" id="uncontrolled-tab-example" className="nav-justified">
								<Tab eventKey="glaph" title="Glaph">
									<Col xs={11} sm={8}>
										<Glaph windInfoList={this.props.selected.windInfoList}/>
									</Col>
								</Tab>
								<Tab eventKey="table" title="Table">
									<div>
									<Table selectedId={this.props.selected.id} windInfoList={this.props.selected.windInfoList}/>
									</div>
								</Tab>
							</Tabs>
						)
					}
				})()}

			</React.Fragment>
		)
	}
}