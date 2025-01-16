import Form from "./Components/Form";
import Loading from "./Components/Loading";
import Modal from "./Components/Modal";
import { useGlobalContext } from "./context";

const App = () => {
  const {
    waiting,
    loading,
    index,
    questions,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) return <Form />;
  if (loading) return <Loading />;

  const { incorrect_answers, correct_answer, question } = questions[index];
  
  // Better answer randomization
  const shuffleAnswers = (correct, incorrect) => {
    const allAnswers = [...incorrect];
    const randomIndex = Math.floor(Math.random() * (allAnswers.length + 1));
    allAnswers.splice(randomIndex, 0, correct);
    return allAnswers;
  };

  const answers = shuffleAnswers(correct_answer, incorrect_answers);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <Modal />
      <div className="p-4 md:p-8 bg-white shadow-lg rounded-xl max-w-[800px] w-11/12 min-h-[300px] transition-all">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-500">Quiz Progress</span>
          <p className="text-green-600 font-medium">
            Question {index + 1} of {questions.length}
          </p>
        </div>

        <div className="space-y-6">
          <h2
            className="text-center font-semibold text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ __html: question }}
          />
          
          <div className="grid gap-3 my-8">
            {answers.map((answer, idx) => (
              <button
                onClick={() => checkAnswer(answer === correct_answer)}
                key={`answer-${idx}`}
                className="w-full px-6 py-3 rounded-lg text-white bg-blue-500 
                         hover:bg-blue-600 active:bg-blue-700 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                dangerouslySetInnerHTML={{ __html: answer }}
                aria-label={`Answer option ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={nextQuestion}
            className="py-3 px-8 rounded-lg text-white bg-green-600 
                     hover:bg-green-700 active:bg-green-800 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                     disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next question"
          >
            Next Question
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
