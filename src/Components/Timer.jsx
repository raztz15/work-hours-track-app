import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import useConvertTimeToInt from "../Hooks/useConvertTimeToInt";
import useTimer from "../Hooks/useTimer";
import API from "../HoursAPI/hours";

function Timer() {
  let history = useNavigate();
  const [totalHours] = useState(0);
  const dataRef = useRef(totalHours);

  useEffect(() => {
    dataRef.current = convertTimeToInt(formatTime());
  });

  const postData = () => {
    const data = {
      totalTime: dataRef.current,
    };
    API.createData(data);
  };

  const {
    timer,
    isPaused,
    isStart,
    handlePaused,
    handleReset,
    handleResume,
    handleStart,
  } = useTimer(0);

  const { convertTimeToInt } = useConvertTimeToInt(totalHours);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <body>
      <div className="buttons">
        <div className="topBtn">
          {!isStart && !isPaused ? (
            <button className="startBtn" onClick={handleStart}>
              Start
            </button>
          ) : isPaused ? (
            <button className="pausedBtn" onClick={handlePaused}>
              Break
            </button>
          ) : (
            <button onClick={handleResume}>Back to work</button>
          )}
        </div>
        <div className="bottomBtn">
          <button
            className="finishBtn"
            onClick={function(event) {
              handleReset();
              // setTotalHours(convertTimeToInt(formatTime()));
              postData();
            }}
            disabled={!isStart}
          >
            Finish
          </button>
        </div>
      </div>
      {isStart ? (
        <div className="timer">
          <p>{formatTime()}</p>
        </div>
      ) : null}
      <div className="totalHours">
        <button
          onClick={(event) => {
            history("/allHours");
          }}
        >
          Total Hours
        </button>
      </div>
    </body>
  );
}

export default Timer;
