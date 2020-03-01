import React, { Component } from "react";
import * as moment from "moment";

export default class Timer extends Component {
  state = {
    time: 0,
    isStarted: false,
    start: 0
  };

  startTimer = () => {
    this.setState({
      isStarted: true,
      time: this.state.time,
      start: this.state.time
    });

    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      1000
    );
  };

  stopTimer = () => {
    this.setState({
      isStarted: false
    });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      time: 0,
      isStarted: false
    });
  };

  render() {
    return (
      <div className="timer">
        <h4>
          {moment()
            .hour(0)
            .minute(0)
            .second(this.state.time)
            .format("HH : mm : ss")}
        </h4>
        <button onClick={this.startTimer}> start </button>
        <button onClick={this.stopTimer}> stop </button>
        <button onClick={this.startTimer}> resume </button>
        <button onClick={this.resetTimer}> reset </button>
      </div>
    );
  }
}
