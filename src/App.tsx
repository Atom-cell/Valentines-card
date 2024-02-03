import { useState } from "react";
function App() {
  const [noString, setNoString] = useState<string>("No");
  const [size, setSize] = useState<string>("lg");
  const [yes, setYes] = useState<boolean>(false);

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
    <div className="h-screen border-red-500 border-3 flex justify-center items-center flex-col space-y-5">
      {!yes ? (
        <img
          alt="bear"
          src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          className="h-56"
        />
      ) : (
        <img
          alt="bear"
          src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.gif"
          className="h-56"
        />
      )}
      {yes ? (
        <h1 className="text-4xl font-bold">OK Yay!!!</h1>
      ) : (
        <h1 className="text-4xl">Will you be my Valentine?</h1>
      )}
      {!yes && (
        <div className="space-x-4">
          <button
            type="button"
            onClick={() => setYes(true)}
            className={`bg-green-500 py-1 w-16 text-white text-${size} font-bold rounded hover:bg-green-600`}
          >
            Yes
          </button>
          <button
            type="button"
            className="bg-red-500 py-1 w-16 text-white text-lg font-bold rounded hover:bg-red-600"
            onClick={() => increaseSize()}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
