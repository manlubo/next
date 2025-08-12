"use client";

import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div className="mt-6 flex items-center gap-3">
      <button
        className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => setN(n - 1)}
      >
        -
      </button>
      <span className="min-w-10 text-center text-lg font-semibold">{n}</span>
      <button
        className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => setN(n + 1)}
      >
        +
      </button>
    </div>
  );
}
