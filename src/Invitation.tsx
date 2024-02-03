import { useState } from "react";
import phrases from "./utils/NoPhrases";

const Invitation = () => {
  const [size, setSize] = useState<number>(25);
  const [yes, setYes] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const increaseSize = (): void => {
    setSize((prev) => prev + 20);
    setCount(count === phrases.length - 1 ? 0 : count + 1);
  };

  const getNoButtonText = (): string => {
    return phrases[count];
  };
  return (
    <div className="h-screen  flex justify-center items-center flex-col space-y-5">
      {!yes ? (
        <img
          alt="bear"
          src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          className="h-56 object-cover"
        />
      ) : (
        <img
          alt="bear"
          src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.gif"
          className="h-56 object-cover"
        />
      )}
      {yes ? (
        <h1 className="text-2xl md:text-4xl font-bold text-center ">
          OK Yay!!!
        </h1>
      ) : (
        <h1 className="text-2xl md:text-4xl font-bold text-center ">
          Will you be my Valentine?
        </h1>
      )}
      {!yes && (
        <div className="md:space-x-4 flex justify-center items-center  max-sm:flex-col max-sm:space-y-4">
          <button
            type="button"
            onClick={() => setYes(true)}
            className={`bg-green-500 py-1 px-3 text-white md:font-semibold rounded hover:bg-green-600`}
            style={{ fontSize: `${size}px` }}
          >
            Yes
          </button>
          <button
            type="button"
            className="bg-red-500 py-1 px-3 text-white text-[25px] md:font-semibold rounded hover:bg-red-600"
            onClick={() => increaseSize()}
          >
            {count === 0 ? "No" : getNoButtonText()}
          </button>
        </div>
      )}
    </div>
  );
};

export default Invitation;
