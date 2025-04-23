import { useState } from "react";
import Modal from "../Modal/Modal";
import QuizTypeForm from "../Form/QuizTypeForm/QuizTypeForm";
import SuccessCreateQuiz from "../Success/Success";
import { useNavigate } from "react-router-dom";
import QuestionAnswerForm from "../Form/QuestionAnswerForm/QuestionAnswerForm";

function CreateQuiz() {
  const [show, setShow] = useState(true);
  const [quiz, setQuiz] = useState({ quizName: "", typeOfQuiz: "none" }); // Initial state
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      question: "",
      optionType: "Text",
      options: [{ ImageUrl: "", text: "" }],
      answer: 0,
      timer: 0,
    },
  ]);
  const [step, setStep] = useState(true);
  const [success, setSuccess] = useState(false);

  function hide() {
    setShow(false);
  }
  
  function hideSuccessfulModal() {
    setSuccess(false);
    navigate("/analysis");
  }

  function showSuccessfulModal() {
    setSuccess(true);
  }

  function setQuizTypeName(data) {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      ...data,
    }));
    setStep(false);
  }

  return (
    <div>
      <Modal onClose={hide} show={show}>
        {step && quiz.typeOfQuiz == "none" ? (
          <QuizTypeForm onClose={hide} setNameType={setQuizTypeName} />
        ) : (
          quiz.typeOfQuiz !== undefined && (
            <QuestionAnswerForm
              id="id"
              state="CREATE"
              quizType={quiz.typeOfQuiz}
              quizName={quiz.quizName}
              onClose={hide}
              showSuccessModal={showSuccessfulModal}
              questions={questions}
              setQuestions={setQuestions}
            />
          )
        )}
      </Modal>
      <Modal onClose={hideSuccessfulModal} show={success}>
        <SuccessCreateQuiz onClose={hideSuccessfulModal} />
      </Modal>
    </div>
  );
}

export default CreateQuiz;
