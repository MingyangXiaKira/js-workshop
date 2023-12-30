import React from "react";

class Counter {
  value: number;
  onUpdate: (newValue: number) => void;

  constructor(initialValue: number = 0, onUpdate: (newValue: number) => void) {
    this.value = initialValue;
    this.onUpdate = onUpdate;
  }

  increment() {
    this.value++;
    this.onUpdate(this.value);
  }

  decrement() {
    this.value--;
    this.onUpdate(this.value);
  }
}

interface Ts_1State {
  count: number;
}

class Ts_1 extends React.Component<{}, Ts_1State> {
  private counter: Counter;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };

    this.counter = new Counter(0, this.updateCount);
  }

  updateCount = (newValue: number) => {
    this.setState({ count: newValue });
  };

  increment = () => {
    this.counter.increment();
  };

  decrement = () => {
    this.counter.decrement();
  };

  render() {
    return (
      <div>
        <h2>TypeScript Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Ts_1;
