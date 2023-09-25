function Option({ option, index, dispatch, answer, correctOption, points }) {
  const clickHandler = () => {
    dispatch({
      type: "setAnswer",
      payload: index,
    });
  };

  const hasAnswer = answer !== null;

  const style = index === correctOption ? "correct" : "wrong";

  return (
    <button
      onClick={clickHandler}
      key={Math.random().toString()}
      className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswer ? style : ""}`}
      disabled={hasAnswer}
    >
      {option}
    </button>
  );
}

export default Option;
