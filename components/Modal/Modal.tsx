import { useRouter } from 'next/router';
import {QuestionIds, QuestionType, resultsHandler, ResultsIds} from '../Villaggio/villaggioData';
import { StyledModal } from "./Modal.style";

export const Modal = ({ id, question, onChange }: ModalProps) => {

  const router = useRouter();

  function handleOnClick(id : QuestionIds | ResultsIds) {
    if (id.includes('q')) {
      //@ts-ignore
      onChange(id)
    } else {
      //@ts-ignore
      router.push(`/risultati/${resultsHandler[id]}`)
    }
  }

  return (
    <StyledModal id={id}>
      {question ? (
        <>
          <h3 style={{marginBottom: '16px'}}>{question.question}</h3>
          <button onClick={() => handleOnClick(question.answer1.next)}>
            {question.answer1.text}
          </button>
          <button onClick={() => handleOnClick(question.answer2.next)}>
            {question.answer2.text}
          </button>
        </>
      ) : (
        <button onClick={() => onChange("q1")}>Comincia il test</button>
      )}
    </StyledModal>
  );
};

type ModalProps = {
  id: string;
  question: QuestionType | undefined;
  onChange: (questionId: QuestionIds) => void;
};
