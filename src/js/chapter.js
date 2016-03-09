import React from 'react';
import ReactDOM from 'react-dom';


class Chapter extends React.Component {
	render() {

		return (
			<div className="chapter">
				<h1>Chapter {this.props.book.chapters[this.props.chapter].chapter}</h1>
				{this.props.book.chapters[this.props.chapter].text.map((par, i) => <p key={i}>{par}</p>)}
			</div>	
		)
	}
}

export default Chapter;
