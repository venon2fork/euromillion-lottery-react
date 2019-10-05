import React, { Component } from "react";
import Ball from "./Ball";

export class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 50
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    this.AddBall = this.AddBall.bind(this);
  }

  generate() {
    this.setState(current => ({
      nums: current.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }
  AddBall() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.AddBall}>Generate </button>
      </section>
    );
  }
}

export default Lottery;
