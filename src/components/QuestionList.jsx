import Option from "./Option";

function QuestionList({ question, answer, dispatch }) {
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <Option
            points={question.points}
            correctOption={question.correctOption}
            answer={answer}
            dispatch={dispatch}
            index={index}
            key={Math.random().toString()}
            option={option}
          />
        );
      })}
    </div>
  );
}

export default QuestionList;
