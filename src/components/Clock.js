import React, { Component } from 'react';

export default class Clock extends Component {
	state = { time: new Date() };

	componentDidMount() {
		this.update = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1 * 1000);
	}

	componentWillUnmount() {
		clearInterval(this.update);
  }
  
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
	render() {
		const { time } = this.state;
		return (
			<div>
				<p id="time">
          <span>{time.getHours()}:</span>  
          <span>{time.getMinutes()}:</span>  
					<span>{this.addZero(time.getSeconds())}</span>
				</p>
			</div>
		);
	}
}
