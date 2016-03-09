import React from 'react';
import ReactDOM from 'react-dom';

import MeditationsAur from './meditations-aur';


class App extends React.Component {
	render() {
		return (
			<MeditationsAur />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));