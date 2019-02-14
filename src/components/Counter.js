import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

 class Counter extends Component {
  render() {

    const { count } = this.props;
    
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => console.log(json))

    return (
      <div className="counter">
        <div>{count}</div>
        <Controls />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;
