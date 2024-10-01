import { useRef } from "react";
import { Link } from "react-router-dom";
import quizzy from "./images/quizzy.png";
export const FrontPage = () => {
  return (
    <div className="max-h-auto min-h-screen w-screen bg-slate-200  flex flex-col items-center pb-10 ">
      <div className="flex flex-col items-center relative">
        <div>
          <img
            className="md:h-32 md:w-32 h-24 w-24 mt-10 "
            src={quizzy}
            alt="Quizzy Logo"
          />
        </div>
        <p className="font-bold md:text-3xl text-2xl text-purple-700">
          QUIZZY
        </p>
      </div>

      <p className=" text-sm md:text-base mt-10">
        Please choose a subject to continue:{" "}
      </p>
      <ul className="mt-5 flex flex-col gap-4 items-center p-0 m-0 md:text-2xl text-base w-[50%] max-w-[300px]  ">
        <Link to="/english" className="w-full">
          <li className="w-full text-center bg-blue-500 hover:cursor-pointer py-5 px-4 border-none">
            English
          </li>
        </Link>
        <Link to="/mathematics" className="w-full">
          <li className=" w-full text-center bg-green-500 hover:cursor-pointer py-5 px-4 border-none ">
            Mathematics
          </li>
        </Link>
        <Link to="/science" className="w-full">
          <li className="w-full text-center bg-red-500 hover:cursor-pointer py-5 px-4 border-none">
            Science
          </li>
        </Link>
        <Link to="/history" className="w-full">
          <li className="w-full text-center bg-yellow-500 hover:cursor-pointer py-5 px-4 border-none ">
            History
          </li>
        </Link>
      </ul>
    </div>
  );
};
