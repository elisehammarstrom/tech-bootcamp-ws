"use client"; // Stating that this is a component to be rendered client-side
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const onClick = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
    setMessage(data.data);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>{message}</p>
        <button onClick={onClick}>TRY TO CLICK ME</button>
      </main>
    </div>
  );
}
