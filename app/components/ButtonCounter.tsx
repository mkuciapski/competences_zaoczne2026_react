"use client";
import { useState } from "react";

const ButtonCounter = () => {
  // Using useState Hook to manage state
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="btn btn-success m-1"
        onClick={() => setCount(count + 1)}
      >
        <p>Count: {count}</p>
      </button>
    </div>
  );
};

export default ButtonCounter;
