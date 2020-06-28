import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer';
import SelectList from './SelectList'

interface OwnProps {
}
type Props = OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {
	render() {
		return (
			<React.Fragment>
				<SelectList />
				{/* <Glaph dataList={this.state.current.dataList} /> */}
				{/* <div className='arrow-table'>
					<Table dataList={this.state.current.dataList} dateText={getSelectText(this.state.current.date)} />
				</div> */}
				{/* <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount} /> */}

			</React.Fragment>
		)
	}
}