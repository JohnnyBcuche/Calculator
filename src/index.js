import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
import * as serviceWorker from './serviceWorker';

class App extends Component {
	render(){
		return(
			<div>
				<Calculator />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
