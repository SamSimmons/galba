import React from 'react';
import ReactDOM from 'react-dom';


import Chapter from './chapter.js';

let chapter = 0;

class Contents extends React.Component {

	handleNext() {
		chapter += 1;
		render()
	}
	
	render() {
		return (
			<div>
				<h2>Table of Contents:</h2>
				{this.props.book.chapters.map((elt, i) => <button key={i}>{elt.chapter}</button>)}
				<button>Prev</button>
				<button onClick={this.handleNext.bind(this)}>Next</button>
				<Chapter book = {this.props.book} chapter={chapter} />
			</div>	
		)
	}
}

export default Contents;
