"use client";
import { useState } from "react";

const ButtonCounter = ({
  initialCount,
  increaseCount,
}: {
  initialCount: number;
  increaseCount: () => void;
}) => {
  // Using useState Hook to manage state
  const [count, setCount] = useState(initialCount);

  function increaseAllCounts() {
    setCount(count + 1);
    increaseCount();
  }
  return (
    <div>
      <button className="btn btn-success m-1" onClick={increaseAllCounts}>
        <p>Count: {count}</p>
      </button>
    </div>
  );
};

export default ButtonCounter;
