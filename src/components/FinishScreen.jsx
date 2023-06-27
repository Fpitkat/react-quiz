import React from "react";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🤩";
  else if (percentage >= 80) emoji = "😀";
  else if (percentage >= 60) emoji = "😐";
  else if (percentage >= 40) emoji = "😕";
  else if (percentage >= 20) emoji = "😟";
  else emoji = "😭";

  return (
    <>
      <p className="result">
        You scored {emoji} <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        out of {Math.ceil(percentage)}%.
      </p>
      <p className="highscore">Highscore : {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
