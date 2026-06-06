"use client";
import { useState } from "react";
import ButtonCounter from "./components/ButtonCounter";

export default function Home() {
  const [count, setCount] = useState(6);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>Total count: {count}</p>
      <ButtonCounter
        initialCount={2}
        increaseCount={() => setCount(count + 1)}
      ></ButtonCounter>
      <ButtonCounter
        initialCount={2}
        increaseCount={() => setCount(count + 1)}
      ></ButtonCounter>
      <ButtonCounter
        initialCount={2}
        increaseCount={() => setCount(count + 1)}
      ></ButtonCounter>
    </div>
  );
}
