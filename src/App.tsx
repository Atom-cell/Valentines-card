import { useState } from "react";
function App() {
  const [size, setSize] = useState<string>("xl");
  const increaseSize = (): void => {
    if (size === "xl") {
      setSize("2xl");
    } else if (size === "2xl") {
      setSize("3xl");
    } else if (size === "3xl") {
      setSize("4xl");
    }
  };

  return (
    <div className="h-screen border-red-500 border-3 flex justify-center items-center">
      <div className="space-x-4">
        <button
          type="button"
          className={`bg-green-500 p-2 w-20 text-white text-${size} font-bold rounded hover:bg-green-600`}
        >
          Yes
        </button>
        <button
          type="button"
          className="bg-red-500 p-2 w-20 text-white text-xl font-bold rounded hover:bg-red-600"
          onClick={() => increaseSize()}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
