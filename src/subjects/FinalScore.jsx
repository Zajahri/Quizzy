import React from "react";
import { Link } from "react-router-dom";
import jacket from '../images/jacket.jpg'
 

// eslint-disable-next-line react/prop-types
const FinalScore = ({ score, currentQuestionIndex }) => {
  return (
    <div className="flex flex-col items-center  ">
      <h1 className=" text-2xl pt-10">Final Score</h1>
      <p className=" text-4xl"> {score} / {currentQuestionIndex + 1}</p>
      <p>{score <= (currentQuestionIndex + 1) / 2 ? 'Better luck next time!!!' : 'Good Job!!!'}</p>
      <div className=" pt-10 underline">
        <Link to="/">Play again</Link>
      </div>
       <div className="pt-10" >
        {score <= ((currentQuestionIndex + 1) / 2) ? "Better Luck next Time" : <img src={jacket} className="h-72" alt="" /> }
        
       </div>
   
    </div>
  );
};

export default FinalScore;
