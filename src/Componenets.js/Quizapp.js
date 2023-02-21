import React, { useState } from "react";
import { QuizData } from "./QuizData";
import Result from "./Result";

const Quizapp = () => {
  const [currentQuetion, setCurrentQuetion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickOption, setClickOption] = useState(0);
  const [showResult,setShowresult] = useState(false)
  const [wronganware,setWrongansware] = useState(0)

  const nextQuestion = () => {
    scoreUpdate();
    currentQuetion < QuizData.length - 1
      ? setCurrentQuetion(currentQuetion + 1 , setClickOption(0))
      : setShowresult(true);
  };

  const scoreUpdate = () => {
    clickOption === QuizData[currentQuetion].answer ? setScore(score + 1) : setWrongansware(wronganware + 1);
  };
  console.log(score);
  return (
    <div className="body">
      <h1 className="Heading">
        <div className="QuizHeadind">QuizApp</div>
        <div className="container">
            {showResult ? (
                <Result score={score} totalscore={QuizData.length} percentage={score+score*10} wronganware={wronganware}/>
            ):(
                <>
          <div className="QuestionCount">
            {currentQuetion+1 +"/"+QuizData.length}
            <div className="Questions">
              <span>{currentQuetion + 1}.</span>
              <span>{QuizData[currentQuetion].question}</span>
            </div>
            <div className="OptionsContainer">
              {QuizData[currentQuetion].options.map((x, i) => {
                return (
                  <button
                    key={i}
                    className={`Options ${ clickOption === i+1 ?"Checked":null}`}
                    onClick={() => setClickOption(x)}
                    
                  >
                    {x}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="NextButton"
              onClick={nextQuestion}
            />
          </div>
          </>)}
        </div>
      </h1>
    </div>
  );
};
export default Quizapp;
