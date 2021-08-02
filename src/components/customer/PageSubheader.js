import React, { Component } from 'react';

class PageSubheader extends Component {
	render() {
		const { style } = this.props;
		const totalStyle = "flex justify-center font-thin py-4 m-2 mx-8 " + style;
		return (
			<h1 className={totalStyle} >{this.props.name}</h1>
		);
	}
}

export default PageSubheader;
