import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Main from "./components/Main";
import QuestionList from "./components/QuestionList";
import Progress from "./components/Progress";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import ResultScreen from "./components/ResultScreen";

const initialState = {
  isQuiz: false,
  questions: [],
  index: 0,
  time: 7 * 60,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "startQuiz":
      return {
        ...state,
        isQuiz: action.payload,
      };
    case "setQuestions":
      return {
        ...state,
        questions: action.payload,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "timeout":
      return {
        ...state,
        time: action.payload,
      };

    case "setAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption ? state.points + question.points : state.points,
      };

    case "restart":
      return {
        ...state,
        isQuiz: false,
        index: 0,
        time: 7 * 60,
        answer: null,
        points: 0,
      };

    default:
      throw new Error("Action not found!");
  }
};

function App() {
  const [{ isQuiz, questions, index, time, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/questions");
      const data = await response.json();
      dispatch({ type: "setQuestions", payload: data });
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      {!isQuiz && <StartScreen onStartQiuz={dispatch} />}

      {isQuiz && (
        <Main>
          {index === 15 && <ResultScreen points={points} dispatch={dispatch} />}
          {index !== 15 && (
            <>
              <Progress points={points} questions={questions} index={index} />

              <div>
                <h4>{questions[index].question}</h4>
                <QuestionList answer={answer} dispatch={dispatch} question={questions[index]} />
              </div>

              <Footer>
                <Timer time={time} onSetTimer={dispatch} />
                <button onClick={() => dispatch({ type: "nextQuestion" })} className="btn btn-ui">
                  {index + 1 === 15 ? "Finish" : "Next"}
                </button>
              </Footer>
            </>
          )}
        </Main>
      )}
    </div>
  );
}

export default App;
