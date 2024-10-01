import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import quizQuestions from "./data/quizQuestions";
import FinalScore from "./subjects/FinalScore";
import { IoIosArrowRoundBack } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const English = ({ subject, bgColor }) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedoption] = useState("");

  const incorrectSound = useRef(new Audio("sounds/wrong.mp3"));
  const correctSound = useRef(new Audio("sounds/correct.mp3"));
  const congrats = useRef(new Audio("sounds/congrats.mp3"));
  const defeat = useRef(new Audio("sounds/defeat.mp3"));

  const currentQuestion = quizQuestions[subject][currentQuestionIndex];

  function handleAnswerClick(selectedOption) {
    setSelectedoption(selectedOption);
    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
      setScore(score + 1);
      correctSound.current.play();
    } else {
      incorrectSound.current.play();
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < quizQuestions[subject].length) {
      setTimeout(() => {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedoption("");
      }, 2000);
    } else {
      setTimeout(() => {
        setShowScore(true);
        if (score <= currentQuestionIndex / 2) {
          defeat.current.play();
        } else {
          congrats.current.play();
        }
      }, 2000);
    }
  }

  return (
    <div className="bg-slate-200 max-h-auto min-h-screen w-screen pb-10 ">
      <div className="  flex flex-col items-center ">
        <div
          className={`${
            showScore ? "hidden" : ""
          }  h-56 xl:h-28 w-screen md:w-[60%] `}
          style={{ backgroundColor: bgColor }}
        >
          <Link
            to="/"
            className="  "
          >
            <IoIosArrowRoundBack className="text-2xl  m-5" />
          </Link>
        </div>
        <svg
          className={` ${showScore ? "hidden" : ""} w-full md:w-[60%]`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={bgColor}
            d="M0,32L120,74.7C240,117,480,203,720,218.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <div>
          {showScore ? (
            <FinalScore
              score={score}
              currentQuestionIndex={currentQuestionIndex}
            />
          ) : (
            <div className="md:max-w-[500px] ">
              <div className="text-2xl absolute top-16 left-1/2 transform -translate-x-1/2 text-white">
                <p className=" text-sm text-center pb-10">
                  Question: {currentQuestionIndex + 1} /{" "}
                  {quizQuestions[subject].length}
                </p>
                <h1 className=" w-80 md:w-auto text-lg md:text-2xl text-center">
                  {currentQuestion.question}
                </h1>
              </div>
              <ul className="  w-[300px] pt-10 md:pt-0 ">
                {currentQuestion.options.map((option, index) => (
                  <li key={index} className="">
                    <button
                      onClick={() => handleAnswerClick(option)}
                      disabled={!!selectedOption} // Disable button after an option is selected
                      className={` border-[1px] w-full py-2 my-2
                        ${
                          selectedOption
                            ? option === currentQuestion.answer
                              ? "bg-green-500" // Correct answer in green
                              : option === selectedOption
                              ? "bg-red-500" // Incorrect selected option in red
                              : "bg-slate-200" // Other options in default color
                            : ""
                        }
                  
                  `}
                      style={{ borderColor: bgColor }}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default English;
