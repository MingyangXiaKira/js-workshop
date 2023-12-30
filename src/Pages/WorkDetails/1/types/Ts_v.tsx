// Ts_1.tsx
import React, { useEffect, useRef } from "react";

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

const Ts_1: React.FC = () => {
  const countRef = useRef<HTMLParagraphElement>(null);
  let counter: Counter;

  useEffect(() => {
    // 初始化计数器实例
    counter = new Counter(0, (newValue) => {
      if (countRef.current) {
        countRef.current.textContent = `Count: ${newValue}`;
      }
    });
  }, []);

  const increment = () => {
    counter.increment();
  };

  const decrement = () => {
    counter.decrement();
  };

  return (
    <div>
      <h2>TypeScript Counter</h2>
      <p ref={countRef}>Count: 0</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Ts_1;
