import { useRef, useState } from "react";
import ResultModel from "./ResultModel.jsx";
export default function TimerChallenge({ title, targetTime }) {
  //const [timeStarted, setTimeStarted] = useState(false);
  //const [timeExpired, setTimeExperied] = useState(false);
  const [timeRemaining, setTimeremaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dailog = useRef();
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dailog.current.showModal();
  }
  function handleReset(){
    setTimeremaining(targetTime * 1000);
  }
  function handleClick() {
    timer.current = setInterval(() => {
      //setTimeExperied(true);
      setTimeremaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);

    //setTimeStarted(true);
  }
  function handleStop() {
    dailog.current.showModal();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModel
        ref={dailog}
        targetTime={targetTime}
        remaningTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleClick}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
