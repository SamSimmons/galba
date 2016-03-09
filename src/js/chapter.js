import React from 'react';
import ReactDOM from 'react-dom';


class Chapter extends React.Component {
	render() {

		return (
			<div>
				{this.props.book.chapters[this.props.chapter].text.map((par, i) => <p key={i}>{par}</p>)}
			</div>	
		)
	}
}

export default Chapter;
