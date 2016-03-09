import React from 'react';
import ReactDOM from 'react-dom';


import Chapter from './chapter.js';

class Contents extends React.Component {
	
	constructor() {
		super();
		this.state = {chapterIndex: 0}
	}
	
	handleNext() {
		if (this.props.book.chapters[this.state.chapterIndex + 1]) {
			this.setState({chapterIndex: this.state.chapterIndex + 1});
		} else {
			console.log("Can't go further ahead");
		}		
	}

	handlePrev() {
		if (this.props.book.chapters[this.state.chapterIndex - 1]) {
			this.setState({chapterIndex: this.state.chapterIndex - 1});
		} else {
			console.log("Can't go further back");
		}		
	}

	handleBtn(evt) {
		// target is the button clicked, minus 1 to account for the zero index in the book array
		let target = evt.target.value;
	
		if (this.props.book.chapters[target]){
			this.setState({chapterIndex: target})
		}
	}

	nextChapterfromBottom() {
		this.handleNext();
		window.scrollTo(0,0);
		console.log('next chapter and scroll to top');
	}
	
	render() {
		return (
			<div className="app-body-wrapper">
				<div className="control-wrapper">
					<h3 className="contents-title">Table of Contents:</h3>
					{this.props.book.chapters.map((elt, i) => <button className="chapter-btn btn" value={i} onClick={this.handleBtn.bind(this)} key={i}>{elt.chapter}</button>)}
					<br/>
					<button className="big-btn btn" onClick={this.handlePrev.bind(this)}>Prev</button>
					<button className="big-btn btn" onClick={this.handleNext.bind(this)}>Next</button>
				</div>
				<Chapter book = {this.props.book} chapter={this.state.chapterIndex} />
				<button className="big-btn btn bottom" onClick={this.nextChapterfromBottom.bind(this)}>Next Chapter</button>
			</div>	
		)
	}
}

export default Contents;
