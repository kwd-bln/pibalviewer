import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer';
import SelectList from './SelectList'
import Glaph from './Glaph'
import { PibalDataInfo, DateInfo } from '../states/IPibalDataList'
import { Table } from './Table';
import { Tab, Tabs, Col, Button, Row, Container, ButtonGroup } from 'react-bootstrap'
import ToggleVisibleButtons from './ToggleVisibleButtons'
import ToggleIsToButton from './ToggleIsToButton'

interface OwnProps {
	token: string
	fetchingDates: boolean
	fetchingPibalData: boolean
  scale: number
  selected?: PibalDataInfo
	dateInfoList: DateInfo[]
	isTo: boolean
}
type Props = OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {
	componentDidMount() {
		if (this.props.token) {
			if (this.props.dateInfoList.length === 0) {
				// dateInfoListがからのとき、APIを叩く
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
								<Tab eventKey="glaph" title="Glaph" tabClassName="my-tab">
									<Container className="px-0" fluid>
										<Row>
											<Col xs={12} sm={8} className="px-0">
												<Glaph windInfoList={this.props.selected.windInfoList} scaleRatio={this.props.scale} isTo={this.props.isTo}/>
												<ButtonGroup vertical className="myButtonClass">
													<Button variant="info"
														className="rounded-circle pull-right center-block my-button"
														size="sm"
														onClick={this.props.handleClickEnlargeButton}>＋</Button>
													<Button variant="info"
														className="rounded-circle pull-right center-block my-button "
														size="sm"
														onClick={this.props.handleClickShrinkButton}>−</Button>
												</ButtonGroup>
												<ToggleIsToButton isTo={this.props.isTo} onClick={this.props.handleClickToggleIsToButton}/> 
											</Col>
											<ToggleVisibleButtons windInfoList={this.props.selected.windInfoList} onClickAt={this.props.handleOnSelectToggleButton} />
										</Row>
									</Container>
								</Tab>
									<Tab eventKey="table" title="Table" tabClassName="my-tab">
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