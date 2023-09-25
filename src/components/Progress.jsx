function Progress({ questions, index, points }) {
  return (
    <header className="progress">
      <progress max={questions.length} value={index}></progress>
      <p>
        Question <strong>{`${index + 1} / ${questions.length}`}</strong>
      </p>
      <p>
        <strong>{points} / 150</strong>
      </p>
    </header>
  );
}

export default Progress;
