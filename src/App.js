import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import LightSwitch from './components/LightSwitch';
import User from './components/User';
import ScoreBoard from './components/UserBoard'
import Clock from './components/Clock'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome</h1>
				</header>

				<main>
        <Clock/>
					<Title content="Some Simple Title" />
					{/* <LightSwitch /> */}
          <ScoreBoard/>
					
				</main>
			</div>
		);
	}
}

export default App;
