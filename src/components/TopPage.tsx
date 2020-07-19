import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer';
import SelectList from './SelectList'
import Glaph from './DstGlaph/Glaph'
import StrategyGlaph from './SpdGlaph/StrategyGlaph'
import SelectTimeButtons from './SpdGlaph/SelectTimeButtons'
import StrategyTable from './SpdGlaph/StrategyTable'
import { PibalDataInfo, DateInfo } from '../states/IPibalDataList'
import NumberTable from './Table/NumberTable'
import { Tab, Tabs, Col, Button, Row, Container, ButtonGroup } from 'react-bootstrap'
import ToggleVisibleButtons from './DstGlaph/ToggleVisibleButtons'
import ToggleIsToButton from './ToggleIsToButton'
import ToggleIsKtButton from './Table/ToggleIsKtButton'

interface OwnProps {
	token: string
	fetchingDates: boolean
	fetchingPibalData: boolean
  scale: number
  selected?: PibalDataInfo
	dateInfoList: DateInfo[]
	isTo: boolean
	glaphIsTo: boolean
	isKt: boolean
	selectedTimeIndex: number
}
type Props = OwnProps & TopPageHandler
export class TopPage extends React.Component<Props> {
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
						const selectedTimeWindInfo = this.props.selected.windInfoList[this.props.selectedTimeIndex]
						return (
							<Tabs defaultActiveKey="glaph" id="uncontrolled-tab-example" className="nav-justified">
								<Tab eventKey="glaph" title="Dst Glaph" tabClassName="my-tab">
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
								<Tab eventKey="st-table" title="Spd Glaph" tabClassName="nav-justified">
									<Container className="px-0" fluid>
										<Row>
											<Col xs={12}>
												<SelectTimeButtons windInfoList={this.props.selected.windInfoList} selectedTimeIndex={this.props.selectedTimeIndex} onClick={this.props.handleOnChangeTimeIndex}/>
											</Col>
										</Row>
										<Row>
											<Col xs={12} sm={8} className="px-0" id="display-flex">
												<StrategyTable num={selectedTimeWindInfo.winds.length} />
												<StrategyGlaph windInfo={selectedTimeWindInfo} />
											</Col>
										</Row>
									</Container>
								</Tab>
								<Tab eventKey="table" title="Table" tabClassName="my-tab">
									<div className="table-button-container">
										<ToggleIsToButton isTo={this.props.glaphIsTo} onClick={this.props.handleClickToggleGlaphIsToButton} className='toggle-table' />
										<ToggleIsKtButton isKt={this.props.isKt} onClick={this.props.handleClickToggleIsKtButton}/> 
									</div>
									<NumberTable windInfoList={this.props.selected.windInfoList} isTo={this.props.glaphIsTo} isKt={this.props.isKt}/>
									<div id="centering">
										<h4>背景色と角度について（少し左にずれてるので作り直し）</h4>
										<img src={require("./img/hsl.png")} className="hsl-image" alt="hsl-circle"/>
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