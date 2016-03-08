import React from 'react';
import ReactDOM from 'react-dom';



class Chapter extends React.Component {
	constructor() {
		super();
		this.state = {
			chapterIndex: 0,
			count: 0
		};
	}

	handlePrev() {
		this.setState({chapterIndex: this.state.chapterIndex - 1});
		
	}
	
	handleNext() {
		this.setState({chapterIndex: this.state.chapterIndex + 1});
		
	}
	
	render() {
		return (
			<div>
				{this.props.book.chapters[this.state.chapterIndex].text.map((par, i) => <p key={i}>{par}</p>)}
				<button onClick={this.handlePrev.bind(this)}>Prev</button>
				<button onClick={this.handleNext.bind(this)}>Next</button>
			</div>
	
		)
	}
}

export default Chapter;
