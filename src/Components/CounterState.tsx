import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
    console.log('Constructor called');
  }

  // Mounting phase
  componentDidMount() {
    console.log('Component mounted');
  }

  // Updating phase
  componentDidUpdate() {
    console.log('Component updated');
  }

  // Unmounting phase
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // Method to increment count
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
