"use strict";

function getRandomInt(min, max) {
	return Math.floor(Math.floor(Math.random() * (max - min + 1)) + min);
}

function max(x, y) {
	return x > y ? x : y;
}

function min(x, y) {
	return x > y ? y : x;
}

var LargeStatus = React.createClass({
	displayName: "LargeStatus",

	getInitialState: function getInitialState() {
		var number = getRandomInt(this.props.min, this.props.max);
		return { number: number };
	},
	componentDidMount: function componentDidMount() {
		var reactObj = this;
		setInterval(function () {
			var curNumber = reactObj.state.number;
			var flux = reactObj.props.flux;
			reactObj.setState({ number: getRandomInt(max(curNumber - flux, reactObj.props.min), min(curNumber + flux + 1, reactObj.props.max)) });
		}, 3000);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "col-xs-9 text-right" },
			React.createElement(
				"div",
				{ className: "huge" },
				this.state.number
			),
			React.createElement(
				"div",
				null,
				this.props.title
			)
		);
	}
});

ReactDOM.render(React.createElement(LargeStatus, { min: 30, max: 70, title: "Current Patrons", flux: 2 }), document.getElementById("nearby-devices"));

