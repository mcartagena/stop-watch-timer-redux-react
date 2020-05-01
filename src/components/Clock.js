import React from 'react'
import moment from 'moment'
import { getLTSFormat, getLTFormat, getlFormat, getMMMMDoYYFormat } from '../actions/index'

class Clock extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setInterval(() => {
			if (this.props.clockData.one == true) {
				this.props.onChangeTimer()
			}
			else if (this.props.clockData.four == true) {
				this.props.onChangeTimer()
			}
		}, 1000)
	}
	render() {
		return (
			<div id="clock" style={this.props.clockData.background} >
				<h1 className={this.props.clockData.class}>{this.props.clockData.time}</h1>
				<button
					onClick={this.props.onChangeFormat}
					style={{
						marginLeft: '4px',
						background: '#89CFF0'
					}}
				>
					Stop Watch
				</button>
			</div>
		)
	}
}

export default Clock