import { useState, ChangeEvent } from "react";
import Invitation from "./Invitation";
import heart1 from "./assets/heart.svg";
import heart2 from "./assets/heartOrigami.svg";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="h-screen flex justify-center relative items-center">
      {!submit ? (
        <>
          <img
            src={heart1}
            className="w-60 absolute top-0 md:right-72 "
            alt="heart"
          />
          <img
            src={heart2}
            className="w-60 absolute bottom-0 md:left-60  -rotate-45"
            alt="heart"
          />
          <div className=" flex flex-col justify-center items-center z-50 border-4 border-red-500 rounded-lg max-sm:py-24 max-sm:px-16 sm:py-40 sm:px-36 bg-white shadow-2xl max-sm:m-2">
            <input
              type="text"
              className="w-full rounded-md  py-2  px-4 bg-red-100  text-black text-xl font-semibold focus:outline-red-500 focus:outline-none"
              placeholder="Enter Name please.."
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <button
              onClick={() => name !== "" && setSubmit(true)}
              className="bg-red-500 py-2 px-4 text-white font-semibold hover:bg-red-700 rounded-lg mt-5"
            >
              Enter
            </button>
          </div>
        </>
      ) : (
        <Invitation name={name} />
      )}
    </div>
  );
}
// input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">

export default App;
