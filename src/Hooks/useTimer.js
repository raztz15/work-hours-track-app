import { useState, useRef } from "react";

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsStart(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePaused = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsStart(false);
    setIsPaused(false);
    setTimer(0);
  };

  return {
    timer,
    isPaused,
    isStart,
    handlePaused,
    handleReset,
    handleResume,
    handleStart,
  };
};

export default useTimer;
