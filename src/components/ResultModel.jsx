import { forwardRef } from "react";

const ResultModel = forwardRef(function ResultModel(
  { targetTime , remaningTime, onReset},
  ref
) {
  const userLost=remaningTime<=0;
  const formattedRemainingTime=(remaningTime/1000).toFixed(2);
  console.log(remaningTime, targetTime);
  const score=(1-remaningTime/(targetTime*1000))*100
  return (
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>you Lost</h2>}
      {!userLost && <h2>Your Score:{score}</h2>}
      <p>
        the target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} timer left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;
