import React from 'react';
import ReactDOM from 'react-dom';

import Library from './library';


class App extends React.Component {
	render() {
		return (
			<div>
				<h1>App -> library</h1>
				<Library />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));