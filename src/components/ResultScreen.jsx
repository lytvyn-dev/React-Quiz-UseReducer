function ResultScreen({ dispatch, points }) {
  return (
    <>
      <p className="result">
        🤨 You scored {points} of 150 ({Math.floor((points / 150) * 100)}%)
      </p>
      <p className="highscore">Highscore: 80 points</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </button>
    </>
  );
}

export default ResultScreen;
