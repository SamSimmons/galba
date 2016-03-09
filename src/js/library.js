import React from 'react';
import ReactDOM from 'react-dom';

import MeditationsAur from './meditations-aur';
import Bookity from './bookity';


class Library extends React.Component {
	
	render() {
		
		return (
			<div>
				<h1>library -> meditations</h1>
				<MeditationsAur />
			</div>
			
		)
	}
}

export default Library;

