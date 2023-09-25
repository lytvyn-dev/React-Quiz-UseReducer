function StartScreen({ onStartQiuz }) {
  return (
    <>
      <h2>Welcome to The React Quiz!</h2>
      <h3>15 questions to test your React mastery</h3>
      <button onClick={() => onStartQiuz({ type: "startQuiz", payload: true })} className="btn">
        Let's start
      </button>
    </>
  );
}

export default StartScreen;
