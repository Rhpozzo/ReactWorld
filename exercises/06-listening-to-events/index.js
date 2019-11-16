import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const clickHandler = e => {
	console.log("I was clicked");
};

const Alert = props => <button onClick={clickHandler}>Click</button>;

Alert.propTypes = {
	onClick: PropTypes.func
};
// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
