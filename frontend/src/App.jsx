import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  // Example state usage (remove if not needed)
  const [count, setCount] = useState(0);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Home</h1>
      <p className="opacity-80 mb-4">Welcome to SE NPRU Blog.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="btn btn-sm btn-primary"
      >
        Clicks: {count}
      </button>
    </div>
  );
}

export default App;
