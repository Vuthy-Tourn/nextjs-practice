"use client";
import { useState } from "react";
import Button from "../components/button/Button";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button />
      <p>{count}</p>
      <div className="flex flex-row gap-4">
        <button
          className="p-4 bg-green-500 text-white uppercase font-bold rounded-xl"
          onClick={() => setCount(count + 1)}
        >
          Increasment
        </button>
        <button
          className="p-4 bg-red-500 text-white uppercase font-bold rounded-xl"
          onClick={() => setCount(count - 1)}
        >
          Decreasment
        </button>
      </div>
    </div>
  );
}
